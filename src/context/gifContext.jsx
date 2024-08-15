/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GiphyFetch } from "@giphy/js-fetch-api";
import React, { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const GifContext = createContext();

// provider component
const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favorites, setFavorites] = useState([]);

  const gifEndpoint = useMemo(
    () => new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY),
    []
  );

  // Use useMemo to memoize the value object
  const contextValue = useMemo(
    () => ({
      gifEndpoint,
      gifs,
      setGifs,
      filter,
      setFilter,
      favorites,
    }),
    [gifEndpoint, gifs, setGifs, filter, setFilter, favorites]
  );

  return (
    <GifContext.Provider value={contextValue}>{children}</GifContext.Provider>
  );
};

GifProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export const GifState = () => {
  return useContext(GifContext);
};
export default GifProvider;
