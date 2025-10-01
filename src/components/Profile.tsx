import { FaLinkedin, FaGithub } from "react-icons/fa";
import presentationImg from "./presentationimgbg.png";

const Profile = () => (
  <section className="container mx-auto py-8 px-4">
    <div className="text-center">
      <img src={presentationImg} className="mx-auto rounded-full w-32 h-32 mb-4" />
      <h1 className="text-3xl font-bold mb-4">Alejandro Velasco | Data Scientist - ML Engineer & AI Engineer</h1>
      <p className="text-lg mb-8">
        Transitioned from 6 yrs in Hospitality Ops to Data-Driven Problem Solving
        - Experience in Human Flow & Efficiency Analytics
        - Skilled in Python, Machine Learning, Deep Learning, Predictive Modeling, Spatial Analytics & ROI
        - Passionate about leveraging data for impactful solutions
      </p>
      <div className="flex justify-center space-x-4 mb-6">
        <a href="https://www.linkedin.com/in/avelascovarona/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/alexvvelasco" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
      </div>
      {/* Add this button */}
      <a href="#projects">
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
          View My Projects
        </button>
      </a>
    </div>
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-2 text-left">Skills</h2>
      <p className="text-lg mb-4 text-left">
        - Programming: Python · SQL · Bash · Git · Jupyter<br />
        - Data Wrangling & Preprocessing: Data Cleaning · Feature Engineering · EDA<br />
        - Visualization: Matplotlib · Seaborn · Plotly · Streamlit<br />
        - Machine Learning: Scikit-Learn · XGBoost · Random Forest · Decision Trees<br />
        - Deep Learning: Tensorflow · Keras · CNN · RNN · LSTM · Transfer Learning<br />
        - NLP: Tokenization · Embeddings · Text Classification<br />
        - Spatial Analytics: Geopandas · Folium · Spatial Data Analysis<br />
        - Cloud & Deployment: AWS · Docker · CI/CD<br />
        - Soft Skills: Problem-Solving · Communication · Team Collaboration · Adaptability
      </p>
    </div>
  </section>
);

export default Profile;
