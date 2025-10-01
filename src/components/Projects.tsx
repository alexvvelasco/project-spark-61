import { myProjects } from "../data/myProjects";

const Projects = () => (
  <section id="projects" className="container mx-auto py-8 px-4">
    <h2 className="text-2xl font-bold mb-6">EV Charging Stations in Shenzhen, China</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {myProjects.map(project => (
        <div key={project.id} className="border rounded-lg p-4 shadow">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="mb-1"><strong>Role:</strong> Sole contributor</p>
          <p className="mb-1"><strong>Description:</strong></p>
          <p className="mb-1">
        · Developed a geospatial analytics framework to identify underserved, high-demand urban zones by integrating POI density, population distribution, and existing charging infrastructure within multi-radius catchment areas.</p>
          <p className="mb-1">
        · Built a predictive modeling pipeline to estimate total energy demand for new charging sites.</p>
          <p className="mb-1">
        · Designed an investment evaluation module to compute ROI timelines and guide optimal capital deployment. </p>
          <p className="mb-1"><strong>Output:</strong></p>
          <p className="mb-1">
            Given the coordinates of new site, charger type, number of chargers and square meter area to purchase, model have in account:</p>
          <p className="mb-1">
            Population and number of stations in that area, distance to nearby stations and their performance, Point of Interest (POI) nearby, land price, charger type price, hardware cost, miscellaneous costs and contingency to calculate: total investment, new site performance and ROI</p>
          <p className="mb-1"><strong>Skills:</strong></p>
          <p className="mb-1">
          · Exploratory Data Analysis
          · Spatial Analysis
          · Machine Learning Modeling
          · Predictive Analytics
          · K-Neighbors
          · Investment Strategy
          </p>
          <p className="mb-1"><strong>Deliverables:</strong></p>
          <p className="mb-1">
            · Interactive web dashboard for finding optimal locations</p>
          <p className="mb-1">
            · Predictive model for site performance</p>
          <p className="mb-1">
            · Investment costs</p>
          <p className="mb-1">
            · Return of investment</p>

          <div className="flex space-x-2 mt-2">
            {project.images.map((img, idx) => (
              <img key={idx} src={img} alt={project.title} className="w-50 h-30 object-cover rounded" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
