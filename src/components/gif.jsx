/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Gif = ({ gif, hover = true }) => {
  return (
    <Link to={`/${gif?.type}s/${gif?.slug}`}>
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
            <span className="flex items-center gap-1">
              {gif?.user?.display_name}
              {gif?.user?.is_verified === true && (
                <svg
                  className="giphy-verified-badge sc-3470275f-1 iLobwA"
                  height="14"
                  width="19px"
                  viewBox="0 0 19 17"
                >
                  <path
                    className="giphy-verified-checkmark"
                    d="M9.32727273,9.44126709 L9.32727273,3.03016561 L6.55027155,3.03016561 L6.55027155,10.8150746 L6.55027155,12.188882 L12.1042739,12.188882 L12.1042739,9.44126709 L9.32727273,9.44126709 Z"
                    fill="#121212"
                    transform="translate(9.327273, 7.609524) scale(-1, 1) rotate(-45.000000) translate(-9.327273, -7.609524) "
                  ></path>
                  <g
                    transform="translate(-532.000000, -466.000000)"
                    fill="#15CDFF"
                  >
                    <g transform="translate(141.000000, 235.000000)">
                      <g transform="translate(264.000000, 0.000000)">
                        <g transform="translate(10.000000, 224.000000)">
                          <g transform="translate(114.000000, 2.500000)">
                            <path d="M15.112432,4.80769231 L16.8814194,6.87556817 L19.4157673,7.90116318 L19.6184416,10.6028916 L21.0594951,12.9065042 L19.6184416,15.2101168 L19.4157673,17.9118452 L16.8814194,18.9374402 L15.112432,21.0053161 L12.4528245,20.3611511 L9.79321699,21.0053161 L8.02422954,18.9374402 L5.48988167,17.9118452 L5.28720734,15.2101168 L3.84615385,12.9065042 L5.28720734,10.6028916 L5.48988167,7.90116318 L8.02422954,6.87556817 L9.79321699,4.80769231 L12.4528245,5.4518573 L15.112432,4.80769231 Z M17.8163503,10.8991009 L15.9282384,9.01098901 L11.5681538,13.3696923 L9.68115218,11.4818515 L7.81302031,13.3499833 L9.7011322,15.2380952 L11.5892441,17.1262071 L17.8163503,10.8991009 Z"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              )}
            </span>
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
      is_verified: PropTypes.bool.isRequired,
    }),
  }).isRequired,
  hover: PropTypes.bool,
};

export default Gif;
