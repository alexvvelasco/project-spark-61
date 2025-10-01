import { FaLinkedin, FaGithub } from "react-icons/fa";

const Profile = () => (
  <section className="container mx-auto py-8 px-4 text-center">
    <img src="/path/to/your-image.jpg" alt="Your Name" className="mx-auto rounded-full w-32 h-32 mb-4" />
    <h1 className="text-3xl font-bold mb-2">Alejandro Velasco</h1>
    <p className="text-lg mb-4">
      Data Scientist - ML Engineer & AI Engineer| - Transitioned from 6 yrs in Hospitality Ops to Data-Driven Problem Solving
      - Experience in Human Flow & Efficiency Analytics
      - Skilled in Python, Machine Learning, Deep Learning, Predictive Modeling, Spatial Analytics & ROI
      - Passionate about leveraging data for impactful solutions

      Skills:
      - Programming: Python · SQL · Bash · Git · Jupyter
      -  Data Wrangling & Preprocessing: Data Cleaning · Feature Engineering · EDA
      -  Visualization: Matplotlib · Seaborn · Plotly · Streamlit
      -  Machine Learning: Scikit-Learn · XGBoost · Random Forest · Decision Trees
      -  Deep Learning: Tensorflow · Keras · CNN · RNN · LSTM · Transfer Learning
      -  NLP: Tokenization · Embeddings · Text Classification
      -  Spatial Analytics: Geopandas · Folium · Spatial Data Analysis
      -  Cloud & Deployment: AWS · Heroku · Docker · CI/CD
      -  Soft Skills: Problem-Solving · Communication · Team Collaboration · Adaptability
    </p>
    <div className="flex justify-center space-x-4 mb-6">
      <a href="https://www.linkedin.com/in/avelascovarona/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={32} />
      </a>
      <a href="https://github.com/alexvvelasco" target="_blank" rel="noopener noreferrer">
        <FaGithub size={32} />
      </a>
    </div>
  </section>
);

export default Profile;
