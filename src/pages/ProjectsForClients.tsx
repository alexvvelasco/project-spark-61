import { myProjects } from "../data/myProjects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ProjectsForClients = () => {
  const clientProjects = [myProjects[2], myProjects[3]]; // Hospital & Stock projects

  return (
    <>
      <Header />
      <section className="container mx-auto py-8 px-4">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-foreground hover:text-primary transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <h2 className="text-3xl font-bold mb-6">Projects for Clients</h2>
        <div className="grid gap-8 md:grid-cols-1">
          {/* Data Analysis, KPI & Power BI Dashboard */}
          <div className="border rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold mb-2">Data Analysis, KPI & Power BI Dashboard</h3>
            <p className="mb-1"><strong>Role:</strong> Sole contributor / Data Analyst</p>
            <p className="mb-1"><strong>Description:</strong></p>
            <p className="mb-1">
              · This project analyzes hospital case records to uncover patterns in patient:
            </p>
            <p className="mb-1">
              Admissions and its fees.
            </p>
            <p className="mb-1">
              Severity of illness
            </p>
            <p className="mb-1">
              Stay duration
            </p>
            <p className="mb-1">
              Hospital resources, departments and locations
            </p>
            <p className="mb-1"><strong>Output:</strong></p>
            <p className="mb-1">
              Power BI interactive dashboard with key insights on patient ages, demographics, admission trends, department performance, and resource utilization to inform hospital management decisions.
            </p>
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
              {clientProjects[0].images.map((img, idx) => (
                <img key={idx} src={img} alt={clientProjects[0].title} className="w-1/2 h-auto object-contain rounded" />
              ))}
            </div>
            <div className="mt-4 flex space-x-4">
              <a
                href={clientProjects[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                GitHub Repo
              </a>
              <a
                href={clientProjects[0].canvas}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                Presentation
              </a>
              <a
                href={clientProjects[0].powerbi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 underline"
              >
                Power BI
              </a>
            </div>
          </div>

          {/* Stock Price Forecasting Using LSTM */}
          <div className="border rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold mb-2">Stock Price Forecasting Using LSTM</h3>
            <p className="mb-1"><strong>Role:</strong> Sole contributor / ML Engineer</p>
            <p className="mb-1"><strong>Description:</strong></p>
            <p className="mb-1">
              · Designed and implemented a deep learning model to forecast stock prices using historical market data, technical indicators, and news sentiment. The model leverages a sequence-to-sequence LSTM architecture to predict future stock prices and expected returns using an autoregressive Monte Carlo approach.
            </p>
            <p className="mb-1">
              · The workflow includes:
            </p>
            <p className="mb-1">
              Downloading historical stock prices and volumes for multiple tickers.
            </p>
            <p className="mb-1">
              Feature engineering with lagged returns, RSI, EMA, MACD, Bollinger Bands, and volume statistics.
            </p>
            <p className="mb-1">
              Sentiment analysis from news headlines.
            </p>
            <p className="mb-1">
              Training a PyTorch Lightning LSTM model with teacher forcing and early stopping.
            </p>
            <p className="mb-1"><strong>Output:</strong></p>
            <p className="mb-1">
              Producing multi-step predictions of future prices and expected returns.
            </p>
            <p className="mb-1"><strong>Skills:</strong></p>
            <p className="mb-1">
              Data Processing & Feature Engineering · Time Series Forecasting · Deep Learning · Sentiment Analysis · NLP · Monte Carlo Simulation
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
                href={clientProjects[1].github}
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
      <Footer />
    </>
  );
};

export default ProjectsForClients;
