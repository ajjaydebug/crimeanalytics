export const kpiStats = [
  {
    label: "Total Crimes Analyzed",
    value: "15,432",
    icon: "database",
    color: "blue",
    trend: "+8.2%",
  },
  {
    label: "Violence Detected",
    value: "3,847",
    icon: "alert-triangle",
    color: "red",
    trend: "+12.4%",
  },
  {
    label: "High-Risk Zones",
    value: "12",
    icon: "map-pin",
    color: "yellow",
    trend: "+2",
  },
  {
    label: "Model Accuracy",
    value: "92.7%",
    icon: "cpu",
    color: "green",
    trend: "+1.3%",
  },
];

export const crimeTypeData = [
  { name: "Assault", count: 1240, fill: "#ef4444" },
  { name: "Theft", count: 3150, fill: "#f9a825" },
  { name: "Robbery", count: 890, fill: "#f97316" },
  { name: "Vandalism", count: 1560, fill: "#8b5cf6" },
  { name: "Harassment", count: 720, fill: "#3b82f6" },
  { name: "Burglary", count: 680, fill: "#06b6d4" },
];

export const monthlyTrendData = [
  { month: "Jan", crimes: 980, violence: 240 },
  { month: "Feb", crimes: 1050, violence: 265 },
  { month: "Mar", crimes: 1180, violence: 290 },
  { month: "Apr", crimes: 1320, violence: 320 },
  { month: "May", crimes: 1420, violence: 355 },
  { month: "Jun", crimes: 1580, violence: 398 },
  { month: "Jul", crimes: 1650, violence: 415 },
  { month: "Aug", crimes: 1590, violence: 400 },
  { month: "Sep", crimes: 1380, violence: 345 },
  { month: "Oct", crimes: 1240, violence: 310 },
  { month: "Nov", crimes: 1100, violence: 275 },
  { month: "Dec", crimes: 940, violence: 234 },
];

export const violenceDistribution = [
  { name: "Violence", value: 3847, fill: "#ef4444" },
  { name: "Non-Violence", value: 11585, fill: "#3b82f6" },
];

export const heatmapData: Record<string, number[]> = {
  Mon: [2, 1, 3, 5, 7, 9],
  Tue: [1, 1, 4, 6, 8, 7],
  Wed: [3, 2, 5, 7, 9, 8],
  Thu: [2, 1, 3, 6, 7, 9],
  Fri: [3, 2, 4, 7, 9, 10],
  Sat: [4, 3, 5, 8, 10, 9],
  Sun: [5, 3, 4, 6, 8, 8],
};

export const timeSlots = ["00-04", "04-08", "08-12", "12-16", "16-20", "20-24"];

export const riskZones = [
  {
    district: "Anna Nagar",
    risk: "High Risk",
    incidents: "1,240",
    trend: "↑",
    riskLevel: 3,
  },
  {
    district: "T. Nagar",
    risk: "High Risk",
    incidents: "1,156",
    trend: "↑",
    riskLevel: 3,
  },
  {
    district: "Chennai Central",
    risk: "High Risk",
    incidents: "1,089",
    trend: "↑",
    riskLevel: 3,
  },
  {
    district: "Velachery",
    risk: "Medium Risk",
    incidents: "876",
    trend: "→",
    riskLevel: 2,
  },
  {
    district: "Adyar",
    risk: "Medium Risk",
    incidents: "743",
    trend: "↓",
    riskLevel: 2,
  },
  {
    district: "Tambaram",
    risk: "Low Risk",
    incidents: "432",
    trend: "↓",
    riskLevel: 1,
  },
  {
    district: "Porur",
    risk: "Low Risk",
    incidents: "312",
    trend: "↓",
    riskLevel: 1,
  },
];

export const modelComparisonData = [
  { model: "AlexNet", training: 91.2, validation: 88.4 },
  { model: "LeNet", training: 88.5, validation: 85.2 },
  { model: "VGG16", training: 92.7, validation: 90.1 },
];

export const modelDetails = [
  {
    name: "AlexNet",
    layers: 8,
    params: "60M",
    accuracy: 91.2,
    best: false,
    desc: "Pioneer deep CNN architecture with ReLU activations",
    features: [
      "5 Conv + 3 FC layers",
      "ReLU activation",
      "Max pooling",
      "Dropout regularization",
    ],
  },
  {
    name: "LeNet",
    layers: 7,
    params: "60K",
    accuracy: 88.5,
    best: false,
    desc: "Lightweight architecture ideal for edge deployment",
    features: [
      "2 Conv + 3 FC layers",
      "Sigmoid activation",
      "Average pooling",
      "Minimal compute",
    ],
  },
  {
    name: "VGG16",
    layers: 16,
    params: "138M",
    accuracy: 92.7,
    best: true,
    desc: "Deep architecture with superior feature extraction",
    features: [
      "13 Conv + 3 FC layers",
      "3×3 conv filters",
      "Max pooling",
      "Transfer learning",
    ],
  },
];

export const alertLog = [
  {
    time: "14:32:07",
    location: "Anna Nagar, Block Z",
    type: "Violence",
    confidence: 0.89,
    status: "Active",
  },
  {
    time: "13:45:22",
    location: "T. Nagar, Panagal Park",
    type: "Assault",
    confidence: 0.77,
    status: "Active",
  },
  {
    time: "12:18:54",
    location: "Velachery, Phoenix Mall",
    type: "Theft",
    confidence: 0.82,
    status: "Resolved",
  },
  {
    time: "11:05:38",
    location: "Chennai Central, Park Town",
    type: "Robbery",
    confidence: 0.71,
    status: "Resolved",
  },
  {
    time: "09:47:13",
    location: "Adyar, Besant Nagar",
    type: "Vandalism",
    confidence: 0.65,
    status: "Resolved",
  },
];

export const architectureStages = [
  {
    step: "01",
    icon: "📊",
    title: "Data Collection",
    color: "#3b82f6",
    bullets: [
      "Kaggle violence datasets",
      "CCTV video feeds",
      "NCRB crime records",
    ],
  },
  {
    step: "02",
    icon: "⚙️",
    title: "Preprocessing",
    color: "#8b5cf6",
    bullets: [
      "Image normalization",
      "Video frame extraction",
      "Data augmentation",
    ],
  },
  {
    step: "03",
    icon: "🧠",
    title: "CNN Training",
    color: "#f9a825",
    bullets: [
      "AlexNet / LeNet / VGG16",
      "TensorFlow + Keras",
      "50 epochs training",
    ],
  },
  {
    step: "04",
    icon: "🎯",
    title: "Model Selection",
    color: "#10b981",
    bullets: [
      "Cross-validation testing",
      "Best accuracy model",
      "Export to SavedModel",
    ],
  },
  {
    step: "05",
    icon: "🚀",
    title: "Deployment",
    color: "#f97316",
    bullets: ["Django web app", "REST API endpoints", "Real-time prediction"],
  },
  {
    step: "06",
    icon: "🚨",
    title: "Alert System",
    color: "#ef4444",
    bullets: ["Email notifications", "Location tracking", "Dashboard update"],
  },
];

export const literatureReviews = [
  {
    title: "SARIMA Temporal Analysis",
    authors: "Kumar et al., 2022",
    desc: "Time-series crime forecasting using seasonal ARIMA models with 87% prediction accuracy on Mumbai data.",
  },
  {
    title: "Random Forest Risk Zones",
    authors: "Patel & Singh, 2021",
    desc: "Ensemble-based spatial crime prediction identifying high-risk hotspots with 83% zone accuracy.",
  },
  {
    title: "GIS-Based Heatmapping",
    authors: "Sharma et al., 2023",
    desc: "Geographic Information Systems integration for real-time crime density visualization across urban areas.",
  },
  {
    title: "NCRB Data Integration",
    authors: "Raj & Kumar, 2022",
    desc: "National Crime Records Bureau data fusion with CNN models for multi-class violence classification.",
  },
];
