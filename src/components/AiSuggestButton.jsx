import { useState } from "react";
import { analyzeItemPhoto } from "../services/aiService";

export default function AiSuggestButton({
  imageBase64,
  categories,
  onSuggestion,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hint, setHint] = useState("");

  const handleAnalyze = async () => {
    if (!imageBase64) {
      setError("Prenez une photo d'abord");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const suggestion = await analyzeItemPhoto(imageBase64, categories, hint);
      onSuggestion(suggestion);
    } catch (err) {
      setError("Impossible d'analyser la photo. Réessayez.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <input
        type="text"
        value={hint}
        onChange={(e) => setHint(e.target.value)}
        placeholder="C'est quoi? Ex: butoir de porte, sac à lunch, coussin..."
        style={{
          width: "100%",
          padding: "10px 12px",
          fontSize: "16px",
          border: "2px solid #e2e8f0",
          borderRadius: "8px",
          marginBottom: "8px",
          boxSizing: "border-box",
        }}
      />
      <button
        type="button"
        onClick={handleAnalyze}
        disabled={loading || !imageBase64}
        style={{
          padding: "10px 20px",
          backgroundColor: loading ? "#ccc" : "#7c3aed",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: loading ? "wait" : "pointer",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {loading ? (
          <>
            <span
              style={{
                display: "inline-block",
                width: "16px",
                height: "16px",
                border: "2px solid white",
                borderTopColor: "transparent",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }}
            />
            Analyse en cours...
          </>
        ) : (
          <>&#10024; Suggestion AI</>
        )}
      </button>
      {error && (
        <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
          {error}
        </p>
      )}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
