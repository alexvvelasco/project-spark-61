import { myProjects } from "../data/myProjects";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PersonalProjects = () => {
  const personalProjects = [myProjects[0], myProjects[1]]; // EV Charging & Anomaly Detection

  return (
    <>
      <Header />
      <section className="container mx-auto py-8 px-4">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-foreground hover:text-primary transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <h2 className="text-3xl font-bold mb-6">Personal Projects</h2>
        <div className="grid gap-8 md:grid-cols-1">
          {/* EV Charging Analytics Platform */}
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
              {personalProjects[0].images.map((img, idx) => (
                <img key={idx} src={img} alt={personalProjects[0].title} className="w-1/2 h-auto object-contain rounded" />
              ))}
            </div>
            <div className="mt-4 flex space-x-4">
              <Link
                to="/ev-chatbot"
                className="text-red-600 underline"
              >
                Interactive Demo Website
              </Link>
              <a
                href={personalProjects[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                GitHub Repo
              </a>
              <a
                href={personalProjects[0].canvas}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                Presentation
              </a>
            </div>
          </div>

          {/* Anomaly Detection */}
          <div className="border rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold mb-2">Anomaly Detection | AI-driven Predictive Maintenance System</h3>
            <p className="mb-1"><strong>Role:</strong> Group Project, Project Manager</p>
            <p className="mb-1"><strong>Description:</strong></p>
            <p className="mb-1">
              · Developed an AI-driven predictive maintenance system for industrial machines.
            </p>
            <p className="mb-1">
              · Predictive maintenance system with AI-based is a Dual-Task System:
            </p>
            <p className="mb-1">
              Classification: Will this machine fail in the next 7 days?
            </p>
            <p className="mb-1">
              Regression: How many useful life days left?
            </p>
            <p className="mb-1">
              · Implemented explainable AI (XAI) techniques to enhance model transparency and stakeholder trust.
            </p>
            <p className="mb-1">
              · Built an interactive Streamlit dashboard to test on new machine's data and visualize anomaly predictions and explanations.
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
              {personalProjects[1].images.map((img, idx) => (
                <img key={idx} src={img} alt={personalProjects[1].title} className="w-1/2 h-auto object-contain rounded" />
              ))}
            </div>
            <div className="mt-4 flex space-x-4">
              <a
                href={personalProjects[1].github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                GitHub Repo
              </a>
              <a
                href={personalProjects[1].canvas}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                Presentation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalProjects;
