/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifState } from "../context/gifContext";
import GifSearch from "./gif-search";

const Header = () => {
  const [categories, setCategories] = useState();
  const [showCategories, setShowCategories] = useState();

  // receiving giphyEndpoint and other required data through context
  const { gifEndpoint, favorites } = GifState();

  // fetching Gif Categories
  const fetchGifCategories = async () => {
    const { data } = await gifEndpoint.categories();
    setCategories(data);
  };

  useEffect(() => {
    fetchGifCategories();
  }, [fetchGifCategories]);

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        {/* Logo & Title */}
        <Link
          to={"/"}
          className="flex gap-2"
          onClick={() => setShowCategories(false)}
        >
          <img
            src="https://media3.giphy.com/media/l3vR16pONsV8cKkWk/200w.gif?cid=6c09b95250rkwqe202a5xaq59gtohuq4fric3a6bsttwh8as&ep=v1_gifs_search&rid=200w.gif&ct=g"
            alt="Giphy Clone Logo"
            className="w-12"
          />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        <div className="font-bold flex gap-2 text-md items-center">
          {/* Category List in Large Screens */}
          {categories?.slice(0, 5)?.map((category) => {
            return (
              <Link
                key={category.name}
                to={`/${category.name_encoded}`}
                className="px-4 py-1 border-b-4 hover:gradient hidden lg:inline-block"
              >
                {category?.name}
              </Link>
            );
          })}
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiOutlineDotsVertical
              size={35}
              className={`py-0.5 border-b-4 hover:gradient hidden lg:inline-block ${
                showCategories ? "gradient" : ""
              }`}
            />
          </button>

          {/* Favorites Button */}
          {favorites.length > 0 && (
            <div className="h-9 px-6 pt-1.5 bg-slate-500 rounded bg-opacity-70 cursor-pointer">
              <Link to={"/favorites"}>Favorite GIFs</Link>
            </div>
          )}

          {/* Mobile Category Button */}
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiMiniBars3BottomRight
              size={35}
              className="text-sky-500 block lg:hidden"
            />
          </button>
        </div>

        {/* Categories List Block */}
        {showCategories && (
          <div className="absolute w-full right-0 top-14 px-10 py-6 gradient z-20">
            <h3 className="text-3xl font-bold">Categories</h3>
            <hr className="bg-gray-100 opacity-50 my-3" />
            <div className="text-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {categories?.map((category) => {
                return (
                  <Link
                    key={category.name}
                    to={`/${category.name_encoded}`}
                    className="font-medium opacity-80"
                    onClick={() => setShowCategories(false)}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Search */}
      <GifSearch />
    </nav>
  );
};

export default Header;
