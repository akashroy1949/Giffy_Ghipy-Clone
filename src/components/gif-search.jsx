import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const GifSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchGifs = async () => {
    if (query.trim === "") {
      return;
    }

    navigate(`/search/${query}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchGifs();
    }
  };

  return (
    <div className="flex relative">
      {/* Search Box */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search all the Gifs and Stickers"
        className="w-full pl-4 py-5 text-xl text-black rounded-l border border-gray-300 outline-none"
      />

      {/* cross mark */}
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute bg-gray-300 opacity-90 rounded-full right-20 top-6 mr-2"
        >
          <HiMiniXMark size={22} />
        </button>
      )}

      {/* send button */}
      <button
        onClick={searchGifs}
        className="px-4 py-2 rounded-r bg-gradient-to-tr from-pink-600 to-pink-400 text-white"
      >
        <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />
      </button>
    </div>
  );
};

export default GifSearch;
