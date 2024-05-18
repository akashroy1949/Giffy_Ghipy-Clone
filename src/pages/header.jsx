import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiDotsVertical, HiOutlineDotsVertical } from "react-icons/hi";

const Header = () => {
  const [categories, setCategories] = useState();
  const [showCategories, setShowCategories] = useState();

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img
            src="https://media3.giphy.com/media/l3vR16pONsV8cKkWk/200w.gif?cid=6c09b95250rkwqe202a5xaq59gtohuq4fric3a6bsttwh8as&ep=v1_gifs_search&rid=200w.gif&ct=g"
            alt="Giphy Clone Logo"
            className="w-12"
          />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        <div className="flex gap-2">
          <Link className="px-4 py-1 border-b-4 hover:gradient hidden lg:inline-block">
            Reaction
          </Link>
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiOutlineDotsVertical
              size={35}
              className={`py-0.5 border-b-4 hover:gradient hidden lg:inline-block ${
                showCategories ? "gradient" : ""
              }`}
            />
          </button>

          <div>
            <Link to={"/favorites"}></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
