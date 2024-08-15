import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gifContext";
import FilterGifs from "../components/filter-gifs";
import Gif from "../components/gif";
import { Loader } from "../components/loader";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { gifEndpoint, filter } = GifState();
  const { query } = useParams();

  const fetchSearchResults = useCallback(async () => {
    setLoading(true);
    const { data } = await gifEndpoint.search(query, {
      sort: "relevant",
      lang: "en",
      type: filter,
      limit: 20,
    });
    setSearchResults(data);
    setLoading(false);
  }, [query, gifEndpoint, filter]);

  useEffect(() => {
    fetchSearchResults();
  }, [fetchSearchResults]);

  return (
    <div className="my-4">
      {/* Title */}
      <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>

      {/* Gifs Filter Button */}
      <FilterGifs alignLeft={true} />

      {/* Conditionally passing Gif results to Gif component and added loader */}
      {loading ? (
        // Loader Component
        <Loader />
      ) : (
        <>
          {searchResults.length > 0 ? (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
              {searchResults?.map((gif) => (
                // Gif component
                <Gif gif={gif} key={gif.id} />
              ))}
            </div>
          ) : (
            <span>
              No Gifs found for {query}. Try Searching for Stickers instead?
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;
