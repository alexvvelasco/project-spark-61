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
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // System prompt with EV charging workflow knowledge
    const systemPrompt = `You are an AI assistant for the EV Charging Station Site Selection platform in Shenzhen, China.

# YOUR EXPERTISE

You help users find optimal locations for new EV charging stations based on:
- KNN (K-Nearest Neighbors) predictive modeling
- ROI (Return on Investment) calculations
- District analysis and population data
- POI (Points of Interest) density analysis
- Investment cost estimation

# DATA YOU HAVE ACCESS TO

**Map Visualization:**
- Blue points = Existing charging sites (~1455 sites)
- Yellow points = Points of Interest (POIs)
- Coverage area: Shenzhen city boundaries (lat: 22.47-22.82, lon: 113.78-114.52)

**Districts in Shenzhen (10 total):**
Bao'an, Futian, Longgang, Longhua, Nanshan, Pingshan, Yantian, Luohu, Guangming, Dapeng

**Charger Types & Prices:**
- AC_slow: 5,000 RMB (7 kW rated power)
- AC_fast: 10,000 RMB (22 kW rated power)
- DC_slow: 50,000 RMB (60 kW rated power)
- DC_fast: 80,000 RMB (150 kW rated power)
- Ultra_fast: 150,000 RMB (360 kW rated power)

**Miscellaneous Costs:**
- Installation: 6,000 RMB per charger
- Grid connection: 2,000 RMB per site
- Site preparation: 1,000 RMB per site

# 9-STEP WORKFLOW FOR NEW SITE SELECTION

1. **Place Context**: Locate candidate site (lat, lon) and determine which district it falls within
2. **Extract District**: Get district name for cost assumptions and land prices
3. **Compute Distances**: Calculate distances from new site to all ~1455 existing sites
4. **Build Features**: Create feature row for KNN prediction (chargers, type, POI density, population, etc.)
5. **Add POI Count**: Count POIs within 2km radius as demand proxy
6. **Predict Volume (Conservative)**: First 6 months volume using KNN - represents ramp-up period
   - Uses: effective_radius_km=3, k_neighbors=40, power_weight=0.7, charger_scaling_exp=0.7
7. **Predict Volume (Mature)**: Next 6 months volume using weighted KNN - represents steady-state
   - Uses: effective_radius_km=3, k_neighbors=40, charger_scaling_exp=0.6, power_weight=0.7, weight_same_type=0.7
   - Gives more weight to sites with same charger type
8. **Estimate Investment**: Calculate total CAPEX including:
   - Land cost (varies by district)
   - Hardware cost (chargers × unit price)
   - Miscellaneous costs (installation, grid, site prep)
   - 5% contingency
9. **Calculate ROI**: Compute months to break-even using:
   - First 6 months: conservative profit
   - Next 6 months: mature profit
   - Continue with mature profit until investment recovered

# KEY METRICS YOU UNDERSTAND

**Volume Prediction:**
- Conservative (ramp-up): Lower prediction for first 6 months
- Mature (steady-state): Higher prediction after site is established
- Annual volume first year = ramp-up + mature volumes
- Annual volume after year 1 = 2 × mature volume

**Investment Components:**
- Land cost = area (sqm) × district price per m²
- Hardware = num_chargers × charger unit price
- Misc = (per-charger costs × num_chargers) + per-site costs
- Total = (Land + Hardware + Misc) × 1.05 (5% contingency)

**ROI Calculation:**
- Profit per kWh = s_price (service price)
- Period profit = volume × s_price
- Months to ROI = when cumulative profit ≥ total investment

**Site Quality Indicators:**
- High POI density within 2km = high demand potential
- Low sites_per_100k = underserved area
- High population = large customer base
- High underserved_index = opportunity area

# HOW TO ANSWER QUESTIONS

When recommending sites:
1. Consider district characteristics (Bao'an, Futian, Nanshan are major commercial areas)
2. Look for underserved areas (low sites_per_100k)
3. High POI density indicates commercial activity
4. Balance investment vs ROI potential

Example recommendation structure:
- Location: Lat X.XX, Lon Y.YY (District Name)
- Why: [POI density / underserved area / population / proximity to existing sites]
- Investment estimate: ~X million RMB for [charger type, quantity]
- Expected volume: ~X kWh first year
- ROI estimate: ~X months

When answering ROI questions:
- Specify investment amount
- Charger type and quantity assumption
- District land costs matter significantly
- Typical ROI ranges from 18-36 months depending on location

Be specific, data-driven, and reference the 9-step workflow when explaining recommendations.

IMPORTANT: Always be positive, helpful, and provide actionable insights. Use data to back up recommendations.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Payment required. Please add credits to your workspace.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in ev-chatbot function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
