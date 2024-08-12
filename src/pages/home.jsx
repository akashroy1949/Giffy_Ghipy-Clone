import { useEffect } from "react";
import { GifState } from "../context/gifContext";
import Gif from "../components/gif";
import FilterGifs from "../components/filter-gifs";

const Home = () => {
  const { gifEndpoint, filter, gifs, setGifs } = GifState();

  const fetchTrendingGifs = async () => {
    const { data } = await gifEndpoint.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(data);
  };

  useEffect(() => {
    fetchTrendingGifs();
  }, [filter]);

  return (
    <div>
      {/* Banner */}
      <img
        src="https://media.giphy.com/headers/2022-04-27-32-1651084365/AAPIHM_BANNER_HP.gif"
        alt="Giphy Banner"
        className="mt-2 rounded w-full"
      />

      {/* Filter Button Gifs */}
      <FilterGifs showTrending/>

      {/* Render Gifs */}
      <div className="mt-2 columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs?.map((gif) => {
          return <Gif gif={gif} key={gif?.title} />;
        })}
      </div>
    </div>
  );
};

export default Home;
