import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const parseMarkdown = (text: string) => {
  // Parse bold **text**
  let parsed = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Parse italic *text*
  parsed = parsed.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Parse line breaks
  parsed = parsed.replace(/\n/g, '<br />');
  return parsed;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const getWebsiteContent = () => {
    return `
ABOUT:
I am a Data Scientist and Machine Learning Engineer with a strong passion for transforming raw data into actionable insights and building intelligent systems that drive real-world impact. My journey in the data science field has been fueled by curiosity, a commitment to continuous learning, and a desire to solve complex problems through innovative approaches.

EDUCATION:
- Master's Degree in Data Science and Business Analytics
  University of Barcelona, Spain (2023 - 2024)
  
- Bachelor's Degree in Industrial Engineering
  Simón Bolívar University, Venezuela (2012 - 2019)

SKILLS:
- Programming: Python · SQL · Bash · Git · Jupyter
- Data Wrangling & Preprocessing: Data Cleaning · Feature Engineering · EDA
- Visualization: Matplotlib · Seaborn · Plotly · Streamlit
- Machine Learning: Scikit-Learn · XGBoost · Random Forest · Decision Trees
- Deep Learning: Tensorflow · Keras · CNN · RNN · LSTM · Transfer Learning
- NLP: Tokenization · Embeddings · Text Classification
- Spatial Analytics: Geopandas · Folium · Spatial Data Analysis
- Cloud & Deployment: AWS · Docker · CI/CD
- Soft Skills: Problem-Solving · Communication · Team Collaboration · Adaptability

PROJECTS:

Project: EV Charging Analytics Platform
Role: Sole contributor
Description:
· Developed a geospatial analytics framework to identify underserved, high-demand urban zones by integrating POI density, population distribution, and existing charging infrastructure within multi-radius catchment areas.
· Built a predictive modeling pipeline to estimate total energy demand for new charging sites.
· Designed an investment evaluation module to compute ROI timelines and guide optimal capital deployment.

Output:
Given the coordinates of new site, charger type, number of chargers and square meter area to purchase, model have in account:
Population and number of stations in that area, distance to nearby stations and their performance, Point of Interest (POI) nearby, land price, charger type price, hardware cost, miscellaneous costs and contingency to calculate: total investment, new site performance and ROI

Skills:
· Exploratory Data Analysis
· Spatial Analysis
· Machine Learning Modeling
· Predictive Analytics
· K-Neighbors
· Investment Strategy

Deliverables:
· Interactive web dashboard for finding optimal locations
· Predictive model for site performance
· Investment costs
· Return of investment
`;
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("website-chat", {
        body: {
          message: input,
          websiteContent: getWebsiteContent(),
        },
      });

      if (error) throw error;

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] flex flex-col shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">Portfolio Assistant</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-sm text-muted-foreground text-center mt-8">
                Ask me anything about this portfolio! For example:
                <p className="mt-2 italic">"What project is the most complete?"</p>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <div 
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.content) }}
                  />
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-sm">Thinking...</p>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about the portfolio..."
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
