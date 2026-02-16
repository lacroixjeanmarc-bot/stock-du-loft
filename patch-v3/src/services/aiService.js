// Service pour l'analyse AI des photos d'articles
const FUNCTION_URL =
  "https://us-central1-stockduloft.cloudfunctions.net/analyzePhoto";

export async function analyzeItemPhoto(imageBase64, categories = [], userHint = "") {
  try {
    const response = await fetch(FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageBase64,
        categories,
        userHint,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erreur serveur: ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      return {
        category: data.category,
        title: data.title,
        description: data.description,
      };
    } else {
      throw new Error(data.error || "Erreur inconnue");
    }
  } catch (error) {
    console.error("Erreur AI:", error);
    throw error;
  }
}
