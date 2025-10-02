import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { X, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import aiChatbotImage from "@/assets/ai-chatbot.png";

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
I am Alejandro Velasco, a Data Scientist, Machine Learning Engineer & AI Engineer who transitioned from 6 years in Hospitality Operations to Data-Driven Problem Solving. I have experience in Human Flow & Efficiency Analytics and am skilled in Python, Machine Learning, Deep Learning, Predictive Modeling, Spatial Analytics & ROI. I'm passionate about leveraging data for impactful solutions.

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

Project 1: EV Charging Analytics Platform
Role: Lead Developer
Description: Developed a web app to analyze EV charging station locations and usage.
Output: Interactive dashboard for city planners.
Skills: React, TypeScript, Python, Data Visualization
Deliverables: Web app, Documentation, Deployment scripts
GitHub: https://github.com/alexvvelasco/EV-Charging-Station---Shenzhen-China
Portfolio: https://alejandroproject.my.canva.site/

Project 2: Anomaly Detection | AI-driven Predictive Maintenance System
Role: Data Scientist
Description: Developed an AI-driven predictive maintenance system for industrial machines.
Output: Given the machine sensor data, model detects anomalies (classification task) & life prediction (regression task) on daily machine behavior records.
Skills: Exploratory Data Analysis, Feature Engineering, Machine Learning Modeling, Predictive Analytics, Explainable AI, Google Cloud Platform, Streamlit
Deliverables: 
- Interactive web dashboard
- Classification: you can train on a GridSeach to find the best hyperparameters for XGBoostClassifier and RandomForestClassifier to predict if your machine will fail in the next 7 days.
- Regression: you can train on a GridSeach to find the best hyperparameters for GradientBoostingRegressor to predict how many useful life days left.
GitHub: https://github.com/alexvvelasco/anomaly-detector-project/tree/alex
Portfolio: https://alejandroproject.my.canva.site/anomaly-detection-ai-driven-predictive-maintenance-system

Project 3: Data Analysis, KPI & Power BI Dashboard
Role: Data Analyst
Description: Analyze hospital case records to uncover patterns in patient demographics and operations.
Output: Power BI interactive dashboard with key insights on patient ages, demographics, admission trends, department performance, and resource utilization to inform hospital management decisions.
Skills: Data Cleaning & Wrangling, Exploratory Data Analysis, Data Visualization, Dashboard Design, Analytical Thinking
Deliverables: Power BI Dashboard, Clean Dataset, Portfolio Exports
GitHub: https://github.com/alexvvelasco/stocks-prediction-LSTM

Project 4: Stock Price Forecasting Using LSTM
Role: Sole Contributor / ML Engineer
Description: Designed and implemented a deep learning model to forecast stock prices using historical market data, technical indicators, and optional news sentiment. The model leverages a sequence-to-sequence LSTM architecture to predict future stock prices and expected returns using an autoregressive Monte Carlo approach.
Output: Power BI interactive dashboard with key insights on patient ages, demographics, admission trends, department performance, and resource utilization to inform hospital management decisions.
Skills: Time Series Forecasting, Deep Learning, NLP / Sentiment Analysis, Monte Carlo Simulation
Deliverables: Predicted future prices and returns for a specified target ticker, Reusable pipeline
GitHub: https://github.com/alexvvelasco/stocks-prediction-LSTM
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
        <div className="fixed bottom-6 right-6 flex flex-col items-center gap-2">
          <p className="text-sm font-medium text-foreground bg-background px-3 py-1 rounded-lg shadow-md">
            Any questions? Chat with AI!
          </p>
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full w-16 h-16 shadow-lg p-0 overflow-hidden"
            size="icon"
          >
            <img src={aiChatbotImage} alt="AI Chatbot" className="w-full h-full object-cover" />
          </Button>
        </div>
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
