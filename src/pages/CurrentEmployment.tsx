import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CurrentEmployment = () => {
  return (
    <>
      <Header />
      <section className="container mx-auto py-8 px-4">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-foreground hover:text-primary transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <h2 className="text-3xl font-bold mb-6">Work History</h2>
        <div className="grid gap-8 md:grid-cols-1">
          {/* Add your employment history here */}
          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-2xl font-semibold mb-2">Data Scientist</h3>
            <p className="text-lg font-medium mb-1">Company Name</p>
            <p className="text-sm text-muted-foreground mb-4">Location - Nov 2025 - present</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Job description point 1</li>
              <li>Job description point 2</li>
              <li>Job description point 3</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-2xl font-semibold mb-2">Machine Learning Engineer</h3>
            <p className="text-lg font-medium mb-1">Previous Company</p>
            <p className="text-sm text-muted-foreground mb-4">Location - Jan 2024 - Oct 2025</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Job description point 1</li>
              <li>Job description point 2</li>
              <li>Job description point 3</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-2xl font-semibold mb-2">Data Analyst</h3>
            <p className="text-lg font-medium mb-1">Earlier Company</p>
            <p className="text-sm text-muted-foreground mb-4">Location - Jun 2022 - Dec 2023</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Job description point 1</li>
              <li>Job description point 2</li>
              <li>Job description point 3</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CurrentEmployment;
