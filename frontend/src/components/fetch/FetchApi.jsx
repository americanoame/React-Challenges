import { useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const FetchApi = () => {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  const fetchSynonyms = (word) => {
    fetch(`${BASE_URL}/words?rel_syn=${word}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(setSynonyms)
      .catch((error) => {
        console.error("Error fetching synonyms:", error);
      });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    fetchSynonyms(word)
  };

  const handleSynonymClick = (word) => {
    setWord(word);
    fetchSynonyms(word);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={HandleSubmit}
        className="bg-white p-6 rounded shadow-lg w-full max-w-sm"
      >
        <label
          htmlFor="word-input"
          className="block text-gray-700 font-bold mb-2"
        >
          Words
        </label>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          id="word-input"
          className="w-full border border-gray-300 rounded p-2 text-black mb-4 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          
        >
          Submit
        </button>

        <ul>
          {synonyms.map((synonymObj, index) => (
            <li
              key={index}
              className="cursor-pointer text-blue-500 hover:underline"
              onClick={() => handleSynonymClick(synonymObj.word)}
            >
              {synonymObj.word}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default FetchApi;
