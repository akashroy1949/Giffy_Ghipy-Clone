import PropTypes from "prop-types";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

export const FollowOn = ({ socialUrls }) => {
  return (
    <div className="faded-text pt-2">
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        {socialUrls?.instagram_url && (
          <a
            href={socialUrls?.instagram_url ?? "https://instagram.com/Giphy"}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={20} />
          </a>
        )}
        {socialUrls?.twitter_url && (
          <a
            href={socialUrls?.twitter_url && "https://twitter.com/Giphy"}
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter size={20} />
          </a>
        )}
        {socialUrls?.youtube_url && (
          <a href="https://youtube.com/Giphy" target="_blank" rel="noreferrer">
            <FaYoutube size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

FollowOn.propTypes = {
  socialUrls: PropTypes.object,
};
