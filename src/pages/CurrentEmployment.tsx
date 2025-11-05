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
        <h2 className="text-3xl font-bold mb-6">Current Positions</h2>
        <div className="grid gap-8 md:grid-cols-1">
          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-2xl font-semibold mb-2">Analytics and Data Automation Engineer</h3>
            <p className="text-lg font-medium mb-1">UnionMap</p>
            <p className="text-sm text-muted-foreground mb-4">San Francisco, US | Nov 2025 - present</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Responsible for end-to-end analytics engineering on builders' data—ingesting, cleansing, transforming, and publishing reliable, analysis-ready datasets to drive decisions.</li>
              <li>Automate scalable ELT/ETL pipelines and reusable functions with testing, documentation, and scheduled orchestration for repeatable, trustworthy insights.</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-2xl font-semibold mb-2">Data Scientist</h3>
            <p className="text-lg font-medium mb-1">Aon Data</p>
            <p className="text-sm text-muted-foreground mb-4">Thailand | Sept 2025 - present</p>
            <ul className="list-disc list-inside space-y-2">
              <li>AI car speech voice learning - audio recording English and Spanish</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-2xl font-semibold mb-2">Data Entry</h3>
            <p className="text-lg font-medium mb-1">Tržiště práce s.r.o.</p>
            <p className="text-sm text-muted-foreground mb-4">Prague, CZ | Sept - present</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Curate Places of Interest in mapping services - create missing places in Google Maps using the data provided</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CurrentEmployment;
