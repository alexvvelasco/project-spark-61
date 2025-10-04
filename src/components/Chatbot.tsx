import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { X, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import aiChatbotImage from "@/assets/ai-chatbot.png";
import { myProjects } from "@/data/myProjects";

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
    const projectsInfo = myProjects.map((project, index) => `
Project ${index + 1}: ${project.title}
Role: ${project.role}
Description: ${project.description}
Output: ${project.output}
Skills: ${Array.isArray(project.skills) ? project.skills.join(', ') : project.skills}
Deliverables: ${Array.isArray(project.deliverables) ? project.deliverables.join(', ') : project.deliverables}
GitHub: ${project.github}
${project.canvas ? `Portfolio: ${project.canvas}` : ''}
${project.powerbi ? `Power BI: ${project.powerbi}` : ''}
`).join('\n');

    return `
ABOUT:
Alejandro Velasco is an exceptional Data Scientist, Machine Learning Engineer & AI Engineer who successfully transitioned from 6 years in Hospitality Operations to Data-Driven Problem Solving. He brings valuable experience in Human Flow & Efficiency Analytics and demonstrates strong expertise in Python, Machine Learning, Deep Learning, Predictive Modeling, Spatial Analytics & ROI. He is passionate about leveraging data for impactful solutions and has a proven track record of delivering high-quality projects.

EDUCATION:
- Master's Degree in Data Science and Artificial Intelligence
  Le Wagon, Melbourne, Australia (2025)

- Degree in Hospitality & Tourism Management
  Maestro Domingo Cáceres, Badajoz, Spain (2018)

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
${projectsInfo}

ALEJANDRO'S STRENGTHS AS AN AI ENGINEER CANDIDATE:
- Demonstrates exceptional technical versatility across the entire AI/ML stack
- Has hands-on experience with production-ready AI systems (predictive maintenance, forecasting models)
- Proven ability to deliver end-to-end projects independently from conception to deployment
- Strong foundation in both theoretical knowledge (Master's in Data Science) and practical engineering (Industrial Engineering background)
- Experience with modern AI frameworks and cloud platforms (TensorFlow, PyTorch, AWS, GCP)
- Excellent problem-solving abilities combining domain knowledge with technical skills
- Track record of building explainable and transparent AI solutions
- Experience with real-world applications across multiple industries
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
