/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Gif = ({ gif, hover = true }) => {
  return (
    <Link to={`${gif?.type}/${gif?.slug}`}>
      <div className="mb-2 relative w-full cursor-pointer group aspect-video">
        {/* Gif Image */}
        <img
          src={gif?.images?.fixed_width.webp}
          alt={gif?.title}
          className="w-full object-cover rounded transition-all duration-500"
        />

        {/* Gif Title and Owner Image */}
        {hover && (
          <div className="absolute  inset-0 opacity-0 rounded group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black font-bold flex items-end gap-2 p-2">
            <img
              src={gif?.user?.avatar_url}
              alt={gif?.user?.display_name}
              className="h-8"
            />
            <span>{gif?.user?.display_name}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

//Add proptypes validation
Gif.propTypes = {
  gif: PropTypes.shape({
    type: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.shape({
      fixed_width: PropTypes.shape({
        webp: PropTypes.string.isRequired,
      }),
    }),
    user: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      display_name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  hover: PropTypes.bool.isRequired,
};

export default Gif;
