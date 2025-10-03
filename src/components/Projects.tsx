import { myProjects } from "../data/myProjects";

const Projects = () => (
  <section id="projects" className="container mx-auto py-8 px-4">
    <h2 className="text-2xl font-bold mb-6">Projects</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {/* First Project */}
      <div className="border rounded-lg p-4 shadow">
        <h3 className="text-xl font-semibold mb-2">EV Charging Analytics Platform</h3>
        <p className="mb-1"><strong>Role:</strong> Sole contributor</p>
        <p className="mb-1"><strong>Description:</strong></p>
        <p className="mb-1">
          · Developed a geospatial analytics framework to identify underserved, high-demand urban zones by integrating POI density, population distribution, and existing charging infrastructure within multi-radius catchment areas.
        </p>
        <p className="mb-1">
          · Built a predictive modeling pipeline to estimate total energy demand for new charging sites.
        </p>
        <p className="mb-1">
          · Designed an investment evaluation module to compute ROI timelines and guide optimal capital deployment.
        </p>
        <p className="mb-1"><strong>Output:</strong></p>
        <p className="mb-1">
          Given the coordinates of new site, charger type, number of chargers and square meter area to purchase, model have in account:
        </p>
        <p className="mb-1">
          Population and number of stations in that area, distance to nearby stations and their performance, Point of Interest (POI) nearby, land price, charger type price, hardware cost, miscellaneous costs and contingency to calculate: total investment, new site performance and ROI
        </p>
        <p className="mb-1"><strong>Skills:</strong></p>
        <p className="mb-1">
          Exploratory Data Analysis · Spatial Analysis · Machine Learning Modeling · Predictive Analytics · K-Neighbors · Investment Strategy
        </p>
        <p className="mb-1"><strong>Deliverables:</strong></p>
        <p className="mb-1">
          · Interactive web dashboard for finding optimal locations
        </p>
        <p className="mb-1">
          · Predictive model for site performance
        </p>
        <p className="mb-1">
          · Investment costs
        </p>
        <p className="mb-1">
          · Return of investment
        </p>
        <div className="flex space-x-2 mt-2">
          {myProjects[0].images.map((img, idx) => (
            <img key={idx} src={img} alt={myProjects[0].title} className="w-40 h-20 object-cover rounded" />
          ))}
        </div>
        <div className="mt-4 flex space-x-4">
            <a
              href={myProjects[0].github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              GitHub Repo
            </a>
            <a
              href={myProjects[0].canvas}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
              Presentation
            </a>
          </div>
      </div>
      {/* Second Project */}
      <div className="border rounded-lg p-4 shadow">
        <h3 className="text-xl font-semibold mb-2"> Anomaly Detection | AI-driven Predictive Maintenance System</h3>
        <p className="mb-1"><strong>Role:</strong> Sole contributor</p>
        <p className="mb-1"><strong>Description:</strong></p>
        <p className="mb-1">
          · Developed an AI-driven predictive maintenance system for industrial machines.
        </p>
        <p className="mb-1">
          · Predictive maintenance system with AI-based is a Dual-Task System:</p>
        <p className="mb-1">
              Classification: Will this machine fail in the next 7 days?</p>
        <p className="mb-1">
              Regression: How many useful life days left?</p>
        <p className="mb-1">
          · Implemented explainable AI (XAI) techniques to enhance model transparency and stakeholder trust.</p>
        <p className="mb-1">
          ·Built an interactive Streamlit dashboard to test on new machine's data and visualize anomaly predictions and explanations.
        </p>
        <p className="mb-1"><strong>Output:</strong></p>
        <p className="mb-1">
          Given the machine sensor data, model detects anomalies (classification task) & life prediction (regression task) on daily machine behavior records.
        </p>
        <p className="mb-1"><strong>Skills:</strong></p>
        <p className="mb-1">
          Exploratory Data Analysis · Feature Engineering · Machine Learning Modeling · Predictive Analytics · Explainable AI · Google Cloud Platform · Streamlit
        </p>
        <p className="mb-1"><strong>Deliverables:</strong></p>
        <p className="mb-1">
          · Interactive web dashboard for uploading your machine data and training models for different tasks:
        </p>
        <p className="mb-1">
            Classification: you can train on a GridSeach to find the best hyperparameters for XGBoostClassifier and RandomForestClassifier to predict if your machine will fail in the next 7 days.
        </p>
        <p className="mb-1">
             Regression: you can train on a GridSeach to find the best hyperparameters for GradientBoostingRegressor to predict how many useful life days left.
        </p>
        <div className="flex space-x-2 mt-2">
          {myProjects[1].images.map((img, idx) => (
            <img key={idx} src={img} alt={myProjects[1].title} className="w-40 h-20 object-cover rounded" />
          ))}
        </div>
        <div className="mt-4 flex space-x-4">
            <a
              href={myProjects[1].github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              GitHub Repo
            </a>
            <a
              href={myProjects[1].canvas}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
              Presentation
            </a>
          </div>
      </div>
      {/* Third Project */}
      <div className="border rounded-lg p-4 shadow">
        <h3 className="text-xl font-semibold mb-2"> Data Analysis, KPI & Power BI Dashboard</h3>
        <p className="mb-1"><strong>Role:</strong> Sole contributor / Data Analyst</p>
        <p className="mb-1"><strong>Description:</strong></p>
        <p className="mb-1">
          · This project analyzes hospital case records to uncover patterns in patient:
        </p>
        <p className="mb-1">
              Admissions and its fees.</p>
        <p className="mb-1">
              Severity of illness</p>
        <p className="mb-1">
              Stay duration</p>
        <p className="mb-1">
              Hospital resources, departments and locations</p>
        <p className="mb-1"><strong>Output:</strong></p>
        <p className="mb-1">
          Power BI interactive dashboard with key insights on patient ages, demographics, admission trends, department performance, and resource utilization to inform hospital management decisions.</p>
        <p className="mb-1"><strong>Skills:</strong></p>
        <p className="mb-1">
          Data Cleaning & Wrangling · Exploratory Data Analysis · Data Visualization · Dashboard Design · Analytical Thinking
        </p>
        <p className="mb-1"><strong>Deliverables:</strong></p>
        <p className="mb-1">
          · Clean Dataset
        </p>
        <p className="mb-1">
          · Power BI Dashboard
        </p>
        <p className="mb-1">
          · Portfolio Exports
        </p>

        <div className="flex space-x-2 mt-2">
          {myProjects[2].images.map((img, idx) => (
            <img key={idx} src={img} alt={myProjects[1].title} className="w-40 h-20 object-cover rounded" />
          ))}
        </div>
        <div className="mt-4 flex space-x-4">
            <a
              href={myProjects[2].github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              GitHub Repo
            </a>
            <a
              href={myProjects[2].canvas}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
              Presentation
            </a>
            <a
              href={myProjects[2].powerbi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 underline"
            >
              Power BI
            </a>
          </div>
      </div>
      {/* Fourth Project */}
      <div className="border rounded-lg p-4 shadow">
        <h3 className="text-xl font-semibold mb-2"> Stock Price Forecasting Using LSTM</h3>
        <p className="mb-1"><strong>Role:</strong> Sole contributor / ML Engineer</p>
        <p className="mb-1"><strong>Description:</strong></p>
        <p className="mb-1">
          · Designed and implemented a deep learning model to forecast stock prices using historical market data, technical indicators, and news sentiment. The model leverages a sequence-to-sequence LSTM architecture to predict future stock prices and expected returns using an autoregressive Monte Carlo approach.
        </p>
        <p className="mb-1">
          · The workflow includes:</p>
        <p className="mb-1">
              Downloading historical stock prices and volumes for multiple tickers.</p>
        <p className="mb-1">
              Feature engineering with lagged returns, RSI, EMA, MACD, Bollinger Bands, and volume statistics.</p>
        <p className="mb-1">
              Sentiment analysis from news headlines.</p>
        <p className="mb-1">
              Training a PyTorch Lightning LSTM model with teacher forcing and early stopping.</p>
        <p className="mb-1"><strong>Output:</strong></p>
        <p className="mb-1">
          Producing multi-step predictions of future prices and expected returns.</p>
        <p className="mb-1"><strong>Skills:</strong></p>
        <p className="mb-1">
          Data Processing & Feature Engineering · Time Series Forecasting · Deep Learning · NLP · Sentiment Analysis · Monte Carlo Simulation
        </p>
        <p className="mb-1"><strong>Deliverables:</strong></p>
        <p className="mb-1">
          · Cleaned and aligned dataset with engineered features for multiple tickers.
        </p>
        <p className="mb-1">
          · Trained LSTM model capable of multi-step forecasting.
        </p>
        <p className="mb-1">
          · Predicted future prices and returns for a specified target ticker.
        </p>
        <p className="mb-1">
          · Reusable pipeline: the model can process new incoming data and generate forecasts automatically.
        </p>

        <div className="mt-4 flex space-x-4">
            <a
              href={myProjects[3].github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              GitHub Repo
            </a>
          </div>
      </div>
    </div>
  </section>
);

export default Projects;
