# SupplyChainManagement_MachineLearning
Used a dataset to train a model that can predict the delay days of a shipment in a route and the probability of it actually occurring using historical shipment data. 
# 📦 Supply Chain Disruption & Delay Duration Predictor

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1po6e3k2WyqhRTOCIjOa6HpW3JdvLDQKb)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-FF6F00?logo=tensorflow&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?logo=python&logoColor=white)
![Scikit-Learn](https://img.shields.io/badge/scikit--learn-F7931E?logo=scikit-learn&logoColor=white)

An end-to-end Deep Learning and Logistics Analytics system that proactively forecasts supply chain disruptions before shipments leave origin ports. Powered by a multi-output TensorFlow/Keras neural network trained on over 180,000 real-world supply chain records, this system simultaneously predicts both **Late Delivery Risk Probability (%)** and **Exact Delay Duration (Days)**.

---

## 🎯 Problem Statement & Impact

Traditional logistics platforms operate reactively—flags are raised only after a delay has occurred. This creates catastrophic downstream bottlenecks, especially when high-criticality goods (e.g., pharmaceuticals, perishable items) are treated with the same static routing rules as low-priority goods.

This project shifts supply chain logistics from **reactive to proactive**:
- **Before Dispatch:** Evaluates shipment route, carrier mode, scheduled lead time, order quantity, and category parameters.
- **Dual Multi-Task Output:** Computes the exact risk score along with expected transit time variance.
- **Actionable Decision-Making:** Provides real-time operational recommendations (e.g., upgrade mode to air freight vs. standard carrier dispatch).

---

## 🏗️ Neural Network Architecture

The engine uses a **Multi-Output Keras Functional Architecture** sharing a deep latent feature representation, optimizing two separate tasks concurrently:
