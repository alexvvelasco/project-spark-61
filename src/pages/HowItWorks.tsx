import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Handshake, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse & Search",
      description: "Explore hundreds of projects or search for specific skills and opportunities that match your expertise.",
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Submit Proposal",
      description: "Create a compelling proposal showcasing your skills, experience, and how you'll deliver value to the client.",
      color: "bg-purple-500"
    },
    {
      icon: Handshake,
      title: "Get Hired",
      description: "Communicate with clients, negotiate terms, and finalize the project details to start working together.",
      color: "bg-teal-500"
    },
    {
      icon: CheckCircle,
      title: "Deliver & Get Paid",
      description: "Complete the project according to requirements, deliver quality work, and receive secure payment through our platform.",
      color: "bg-green-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">How FreelanceHub Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Getting started is simple. Follow these steps to find work or hire talent on our platform.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-card-hover transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="pt-6">
                      <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <div className="text-3xl font-bold text-muted-foreground mb-3">0{index + 1}</div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* For Freelancers */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">For Freelancers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Find Great Projects</h3>
                    <p className="text-muted-foreground">Browse thousands of projects across all categories and skill levels. Use filters to find exactly what you're looking for.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Build Your Portfolio</h3>
                    <p className="text-muted-foreground">Showcase your work, collect reviews, and build a reputation that attracts more clients.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
                    <p className="text-muted-foreground">Get paid on time with our secure payment system and escrow protection.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Grow Your Career</h3>
                    <p className="text-muted-foreground">Work with top clients, build long-term relationships, and take your freelance career to the next level.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* For Clients */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">For Clients</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Access Top Talent</h3>
                    <p className="text-muted-foreground">Connect with skilled professionals across all industries and expertise levels.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Post Projects Easily</h3>
                    <p className="text-muted-foreground">Create detailed project listings in minutes and start receiving proposals from qualified freelancers.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Review & Compare</h3>
                    <p className="text-muted-foreground">Review proposals, check portfolios and ratings, and choose the best fit for your project.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Safe & Reliable</h3>
                    <p className="text-muted-foreground">Benefit from secure payments, dispute resolution, and quality guarantees.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-primary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">Join FreelanceHub today and discover your next opportunity</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/signup">Sign Up Free</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/projects">Browse Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
