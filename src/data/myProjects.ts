import evProjectImg from "./ev_project_img.png";
import anomalydetectionImg from "./anomaly.png" // use relative path with "./";
import hospitalImg from "./hospitaldashboard.png" // use relative path with "./";

export const myProjects = [
  {
    id: "1",
    title: "EV Charging Analytics Platform",
    role: "Lead Developer",
    description: "Developed a web app to analyze EV charging station locations and usage.",
    output: "Interactive dashboard for city planners.",
    skills: ["React", "TypeScript", "Python", "Data Visualization"],
    deliverables: ["Web app", "Documentation", "Deployment scripts"],
    github: "https://github.com/alexvvelasco/EV-Charging-Station---Shenzhen-China",
    canvas: "https://alejandroproject.my.canva.site/",
    images: [evProjectImg]
  },
  {
    id: "2",
    title: "Anomaly Detection | AI-driven Predictive Maintenance System",
    role: "Data Scientist",
    description: "Developed an AI-driven predictive maintenance system for industrial machines.",
    output: "Given the machine sensor data, model detects anomalies (classification task) & life prediction (regression task) on daily machine behavior records.",
    skills: ["Exploratory Data Analysis",  "Feature Engineering",  "Machine Learning Modeling", "Predictive Analytics", "Explainable AI", "Google Cloud Platform", "Streamlit"],
    deliverables: ["Interactive web dashboard", "Classification: you can train on a GridSeach to find the best hyperparameters for XGBoostClassifier and RandomForestClassifier to predict if your machine will fail in the next 7 days.", "Regression: you can train on a GridSeach to find the best hyperparameters for GradientBoostingRegressor to predict how many useful life days left."],
    github: "https://github.com/alexvvelasco/anomaly-detector-project/tree/alex",
    canvas: "https://alejandroproject.my.canva.site/anomaly-detection-ai-driven-predictive-maintenance-system",
    images: [anomalydetectionImg]
  },
  {
    id: "3",
    title: "Data Analysis, KPI & Power BI Dashboard",
    role: "Data Analyst",
    description: "Analyze hospital case records to uncover patterns in patient,",
    output: "Power BI interactive dashboard with key insights on patient ages, demographics, admission trends, department performance, and resource utilization to inform hospital management decisions.",
    skills: ["Data Cleaning & Wrangling", "Exploratory Data Analysis", "Data Visualization", "Dashboard Design", "Analytical Thinking"],
    deliverables: ["Power BI Dashboard", "Clean Dataset", "Portfolio Exports"],
    github: "https://github.com/alexvvelasco/stocks-prediction-LSTM",
    canvas: "/hospital_2.pdf",
    images: [hospitalImg]
  },
  {
    id: "4",
    title: "Stock Price Forecasting Using LSTM",
    role: "Sole Contributor / ML Engineer",
    description: "Designed and implemented a deep learning model to forecast stock prices using historical market data, technical indicators, and optional news sentiment. The model leverages a sequence-to-sequence LSTM architecture to predict future stock prices and expected returns using an autoregressive Monte Carlo approach.",
    output: "Power BI interactive dashboard with key insights on patient ages, demographics, admission trends, department performance, and resource utilization to inform hospital management decisions.",
    skills: ["Time Series Forecasting", "Deep Learning",  "NLP / Sentiment Analysis", "Monte Carlo Simulation"],
    deliverables: ["Predicted future prices and returns for a specified target ticker", "Reusable pipeline"],
    github: "https://github.com/alexvvelasco/stocks-prediction-LSTM"
  },
];
