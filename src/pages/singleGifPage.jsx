import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gifContext";
import Gif from "../components/gif";
import { Loader } from "../components/loader";
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";
import { FollowOn } from "../components/follow-on";

const contentType = ["gifs", "stickers", "texts"];

const SingleGifPage = () => {
  const [gif, setGif] = useState({});
  const [relatedGifs, setRelatedGifs] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const { type, slug } = useParams();
  const { gifEndpoint } = GifState();
  const dots = gif?.user?.description.length > 100 ? "..." : "";

  const fetchGif = useCallback(async () => {
    setLoading(true);
    const gifId = slug.split("-");
    const { data } = await gifEndpoint.gif(gifId[gifId.length - 1]);
    const { data: related } = await gifEndpoint.related(
      gifId[gifId.length - 1],
      {
        limit: 10,
      }
    );
    setGif(data);
    setRelatedGifs(related);
    setLoading(!data);
  }, [gifEndpoint, slug]);

  useEffect(() => {
    if (!contentType.includes(type)) {
      throw new Error("Invalid Content Tpye");
    }
    fetchGif();
  }, [fetchGif, type]);

  return loading ? (
    <Loader />
  ) : (
    <div className="grid grid-cols-4 my-10 gap-4">
      <div className="hidden sm:block">
        {gif?.user && (
          <>
            <div className="flex gap-1">
              <img
                src={gif?.user?.avatar_url}
                alt={gif?.user?.display_name}
                className="h-14"
              />
              <div className="px-2">
                <div className="font-bold">{gif?.user?.display_name}</div>
                <div className="flex items-center font-text text-sm">
                  @{gif?.user?.username}
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
                </div>
              </div>
            </div>
            {gif?.user?.description && (
              <p className="py-4 whitespace-pre-line text-sm text-gray-400">
                {readMore
                  ? gif?.user?.description
                  : gif?.user?.description.slice(0, 100) + dots}

                {gif?.user?.description.length > 100 && (
                  <button
                    className="flex items-center faded-text cursor-pointer"
                    onClick={() => setReadMore(!readMore)}
                    tabIndex={0}
                  >
                    {readMore ? (
                      <>
                        Read Less <HiMiniChevronUp size={20} />{" "}
                      </>
                    ) : (
                      <>
                        Read More <HiMiniChevronDown size={20} />{" "}
                      </>
                    )}
                  </button>
                )}
              </p>
            )}
          </>
        )}

        <FollowOn socialUrls={gif?.user} />

        <div className="divider" />
      </div>
      <div className="col-span-4 sm:col-span-3">
        <div className="flex gap-6">
          <div className="w-full sm:w-3/4">
            <div className="faded-text truncate mb-2">{gif?.title}</div>
            <Gif gif={gif} hover={false} />
          </div>
          favorite gifs
        </div>

        <div>
          <span className="font-extrabold">related</span>
        </div>
      </div>
    </div>
  );
};

export default SingleGifPage;
