/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useState } from "react";

const GifContext = createContext();

// provider component
const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [filters, setFilters] = useState("gifs");
  const [favorites, setFavorites] = useState([]);

  const gifEndpoint = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);
  return (
    <GifContext.Provider
      value={{ gifEndpoint, gifs, setGifs, filters, setFilters, favorites }}
    >
      {children}
    </GifContext.Provider>
  );
};

export const GifState = () => {
  return useContext(GifContext);
};
export default GifProvider;
