import { useState } from "react";

const TweetGenerator = () => {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("professional");
  const [generatedTweet, setGeneratedTweet] = useState("");
  const [loading, setLoading] = useState(false);

  const toneOptions = [
    "professional",
    "casual",
    "humorous",
    "formal",
    "enthusiastic",
    "informative",
  ];

  const generateTweet = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5001/api/generate-tweet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic, tone }),
      });

      const data = await response.json();
      if (data.tweet) {
        setGeneratedTweet(data.tweet);
      }
    } catch (error) {
      console.error("Error generating tweet:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedTweet);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Tweet Generator</h2>

      <form onSubmit={generateTweet} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Tweet Topic</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your tweet topic"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tweet Tone</label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            {toneOptions.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-2 rounded-lg ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          {loading ? "Generating..." : "Generate Tweet"}
        </button>
      </form>

      {generatedTweet && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <p className="mb-4">{generatedTweet}</p>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Copy to Clipboard
          </button>
        </div>
      )}

      {loading && (
        <div className="mt-4 flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default TweetGenerator;
