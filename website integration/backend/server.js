const multer = require('multer');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Configure upload storage for custom CSV/XLSX files
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// Add this endpoint to your existing Express router/app
app.post('/api/predict', upload.single('dataset'), (req, res) => {
  const customFilePath = req.file ? req.file.path : null;
  
  // Parse feature inputs from frontend request body
  const inputFeatures = req.body.features ? JSON.parse(req.body.features) : [3, 5, 250.0, 45.0, 1, 42, 'Electronics', 'New York'];
  
  const scriptPath = path.join(__dirname, 'scripts', 'predict.py');
  const args = [scriptPath];
  
  if (customFilePath) {
    args.push('--custom_data', customFilePath);
  }
  args.push('--features', JSON.stringify(inputFeatures));

  const pythonProcess = spawn('python', args);
  let resultData = '';
  let errorData = '';

  pythonProcess.stdout.on('data', (data) => { resultData += data.toString(); });
  pythonProcess.stderr.on('data', (data) => { errorData += data.toString(); });

  pythonProcess.on('close', (code) => {
    // Clean up uploaded file after processing if desired
    if (customFilePath && fs.existsSync(customFilePath)) {
      // fs.unlinkSync(customFilePath); 
    }

    if (code !== 0) {
      return res.status(500).json({ error: errorData || 'Model execution failed' });
    }
    try {
      const parsed = JSON.parse(resultData.trim());
      res.json({ success: true, ...parsed });
    } catch (e) {
      res.status(500).json({ error: 'Failed to parse model output', raw: resultData });
    }
  });
});