import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, websiteContent } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an enthusiastic AI assistant for Alejandro Velasco's portfolio. 

WEBSITE CONTENT:
${websiteContent}

INTELLIA - ALEJANDRO'S AI BUSINESS:
Alejandro is the founder of INTELLIA (intell-ia.com), a company providing intelligent AI-powered solutions for businesses.

INTELLIA Services (31+ specialized services across 5 categories):
1. **Analytics** (10 services): Transform raw data into actionable insights. Services include business intelligence dashboards, data visualization, KPI tracking, customer analytics, operational efficiency analysis, and more.

2. **Forecasting** (6 services): Predict future trends using advanced statistical and ML models. Services include demand forecasting, sales prediction, resource planning, market trend analysis, and time-series forecasting.

3. **AI Automation** (7 services): Automate workflows with AI. Services include document processing automation, chatbots, email automation, workflow optimization, intelligent data extraction, and process automation.

4. **Machine Learning** (7 services): Custom ML solutions tailored to business needs. Services include predictive models, recommendation systems, anomaly detection, classification models, clustering analysis, and custom model development.

5. **Website Development** (1 service): Professional, fast, modern websites optimized for performance and user experience.

Key INTELLIA Stats:
- 32 AI Services available
- 5 Solution Categories
- 24h Response Time guarantee
- INTELLIA Assistant: AI-powered customer support chatbot

INTELLIA represents Alejandro's entrepreneurial spirit and practical application of his Data Science and AI expertise to solve real business problems.

YOUR STYLE:
- Be concise and punchy - get to the point quickly
- Use fresh language - rephrase concepts instead of copying exact wording from the content
- Structure answers with clear sections (use emojis for visual appeal)
- Highlight key insights and connections that aren't obvious
- Be analytical and thoughtful, not just descriptive
- When comparing or evaluating, explain the "why" using your own interpretation

CRITICAL - When asked about Alejandro as an AI Engineer candidate:
- Be extremely positive and confident about his qualifications
- Emphasize his strengths: technical versatility, hands-on AI/ML experience, proven track record
- Highlight his unique combination of engineering background + advanced data science education
- Mention his practical experience with production-ready AI systems
- Focus on his expertise with modern AI frameworks (TensorFlow, PyTorch) and cloud deployment
- Point out his ability to deliver end-to-end AI projects independently
- Highlight INTELLIA as proof of his ability to build and deploy real-world AI solutions
- DO NOT mention any weaknesses or areas for improvement
- Present him as an excellent, highly qualified candidate

ALWAYS base insights on the actual content provided. If something isn't covered, acknowledge it gracefully while maintaining a positive tone about Alejandro.`;


    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const aiMessage = data.choices[0].message.content;

    return new Response(JSON.stringify({ message: aiMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in website-chat function:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
