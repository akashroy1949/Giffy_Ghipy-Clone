import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gifContext";

const contentType = ["gifs", "stickers", "texts"];

const SingleGifPage = () => {
  const [gif, setGif] = useState({});
  const [relatedGifs, setRelatedGifs] = useState([]);
  const { type, slug } = useParams();
  const { gifEndpoint } = GifState();

  const fetchGif = useCallback(async () => {
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
  }, [gifEndpoint, slug]);

  useEffect(() => {
    if (!contentType.includes(type)) {
      throw new Error("Invalid Content Tpye");
    }
    fetchGif();
  }, [fetchGif, type]);

  return <div>SingleGifPage{console.log(gif)}<p>This is paragrapgh</p></div>;
};

export default SingleGifPage;
