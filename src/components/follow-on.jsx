import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

export const FollowOn = () => {
  return (
    <div className="faded-text pt-2">
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://instagram.com/Giphy" target="_blank" rel="noreferrer">
          <FaInstagram size={20} />
        </a>
        <a href="https://twitter.com/Giphy" target="_blank" rel="noreferrer">
          <FaXTwitter size={20} />
        </a>
        <a href="https://youtube.com/Giphy" target="_blank" rel="noreferrer">
          <FaYoutube size={20} />
        </a>
      </div>
    </div>
  );
};
