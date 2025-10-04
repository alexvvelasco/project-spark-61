import { EVChatbot } from '@/components/EVChatbot';

const EVChatbotPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            EV Charging Site Selection AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered assistant for optimal EV charging station placement in Shenzhen, China
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-lg bg-card border hover:border-primary/50 transition-colors">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold mb-2">Site Recommendations</h3>
            <p className="text-sm text-muted-foreground">
              Get AI-powered location suggestions based on KNN modeling and district analysis
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border hover:border-primary/50 transition-colors">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-semibold mb-2">ROI Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Calculate investment costs and months to break-even for any location
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border hover:border-primary/50 transition-colors">
            <div className="text-3xl mb-3">🗺️</div>
            <h3 className="font-semibold mb-2">Map Intelligence</h3>
            <p className="text-sm text-muted-foreground">
              Analyze existing sites (blue) and POIs (yellow) across Shenzhen's 10 districts
            </p>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border mt-12 text-left space-y-4">
          <h2 className="text-2xl font-bold mb-4">Try asking:</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>"Recommend me a new site with high potential and explain why you chose that location"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>"What is the average ROI for a 2,000,000 RMB investment in Bao'an district?"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>"Explain the 9-step workflow for selecting a new charging station site"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>"Which districts are most underserved for EV charging stations?"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>"Compare DC_fast vs Ultra_fast chargers for a commercial district"</span>
            </li>
          </ul>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Click the chat button in the bottom right to get started →
        </p>
      </div>

      <EVChatbot />
    </div>
  );
};

export default EVChatbotPage;
