const { onRequest } = require("firebase-functions/v2/https");
const Anthropic = require("@anthropic-ai/sdk").default;
const { defineSecret } = require("firebase-functions/params");

const anthropicApiKey = defineSecret("ANTHROPIC_API_KEY");

exports.analyzePhoto = onRequest(
  {
    cors: true,
    secrets: [anthropicApiKey],
    region: "us-central1",
    maxInstances: 5,
    timeoutSeconds: 30,
  },
  async (req, res) => {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    try {
      const { imageBase64, categories } = req.body;

      if (!imageBase64) {
        return res.status(400).json({ error: "imageBase64 is required" });
      }

      // Nettoyer le base64 (enlever le prefix data:image/... si present)
      const cleanBase64 = imageBase64.replace(
        /^data:image\/[a-zA-Z]+;base64,/,
        ""
      );

      // Determiner le type d'image
      let mediaType = "image/jpeg";
      if (imageBase64.startsWith("data:image/png")) {
        mediaType = "image/png";
      } else if (imageBase64.startsWith("data:image/webp")) {
        mediaType = "image/webp";
      }

      const client = new Anthropic({
        apiKey: anthropicApiKey.value(),
      });

      const categoriesList =
        categories && categories.length > 0
          ? categories.join(", ")
          : "Decoration, Bijoux, Couture, Tricot, Bois, Ceramique, Savons, Chandelles, Papeterie, Autre";

      const response = await client.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 300,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image",
                source: {
                  type: "base64",
                  media_type: mediaType,
                  data: cleanBase64,
                },
              },
              {
                type: "text",
                text: `Tu es un assistant pour une artisane quebecoise qui cree des articles faits main. Analyse cette photo et retourne UNIQUEMENT un objet JSON valide (sans backticks, sans texte avant ou apres) avec ces champs :
{
  "category": "une categorie parmi: ${categoriesList}",
  "description": "description de vente courte en francais (max 80 caracteres), descriptive et attrayante pour un acheteur"
}
Choisis la categorie la plus appropriee. La description doit mentionner les materiaux visibles, les couleurs et le style.`,
              },
            ],
          },
        ],
      });

      const text = response.content
        .filter((block) => block.type === "text")
        .map((block) => block.text)
        .join("");

      const cleaned = text.replace(/```json|```/g, "").trim();
      const result = JSON.parse(cleaned);

      return res.status(200).json({
        success: true,
        category: result.category || "",
        description: result.description || "",
      });
    } catch (error) {
      console.error("Erreur analyzePhoto:", error);
      return res.status(500).json({
        error: "Erreur lors de l'analyse de la photo",
        details: error.message,
      });
    }
  }
);
