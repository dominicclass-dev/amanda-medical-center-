import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "What is the address, phone number, website, and opening hours for 'Cosmoderm Clinic l عيادات كوزموديرم' located at 21.5793444, 39.1417556 in Saudi Arabia? Please return it as JSON.",
    config: {
      tools: [{ googleMaps: {} }],
      toolConfig: {
        retrievalConfig: {
          latLng: {
            latitude: 24.4627101,
            longitude: 39.6527422
          }
        }
      }
    }
  });
  console.log(response.text);
}

run().catch(console.error);
