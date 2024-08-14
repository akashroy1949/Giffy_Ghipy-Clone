import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gifContext";
import Gif from "../components/gif";
import { FollowOn } from "../components/follow-on";

const Category = () => {
  const [results, setResults] = useState([]);
  const { gifEndpoint } = GifState();
  const { catergory } = useParams();

  const fetchCategoryResults = useCallback(async () => {
    const { data } = await gifEndpoint.gifs(catergory, catergory);
    setResults(data);
  }, [catergory, gifEndpoint]);

  useEffect(() => {
    fetchCategoryResults();
  }, [fetchCategoryResults]);

  return (
    <div className="flex flex-col sm:flex-row gap-5 my-4">
      <div className="w-full sm:w-72">
        {results.length > 0 && <Gif gif={results[0]} hover={false} />}
        <span className="text-gray-400 text-sm pt-2">
          Don&apos;t tell it to me, Gif it to me
        </span>
        <FollowOn />
        <div className="divider" />
      </div>
    </div>
  );
};

export default Category;
