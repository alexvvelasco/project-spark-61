import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { supabase } from '@/integrations/supabase/client';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
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
export const EVChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your EV Charging Site Selection AI assistant.\n\nAsk me anything about EV charging site selection in Shenzhen!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('ev-chatbot', {
        body: { messages: [...messages, userMessage] },
      });

      if (error) throw error;

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.reply,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      {/* Header Section */}
      <div className="w-full py-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Custom Header */}
          <div className="md:col-span-3 text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-400 mb-2">
              AI-powered bot to help you find best locations
            </h1>
            <p className="text-base text-black">
              scroll down to chat with AI
            </p>
          </div>
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
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
          {/* Example Prompts */}
          <div className="bg-card p-8 rounded-lg border text-left space-y-4">
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
        </div>
      </div>


      {/* Chat Section */}
      <div className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 w-full max-w-4xl mx-auto px-6">
          <div className="space-y-4 py-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <div
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }}
                  />
                </div>
                {message.role === 'user' && (
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="rounded-lg px-4 py-2 bg-muted">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-foreground/60 animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 rounded-full bg-foreground/60 animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 rounded-full bg-foreground/60 animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
            </div>
          </ScrollArea>
        </div>

        {/* Input Section */}
        <div className="p-6 border-t bg-background">
          <div className="flex gap-2 max-w-4xl mx-auto">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Chat with AI"
            disabled={isLoading}
            className="flex-1"
          />
          <Button onClick={handleSend} disabled={isLoading || !input.trim()} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
