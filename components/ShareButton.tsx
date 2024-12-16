import React from 'react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

interface ShareButtonProps {
  message: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ message }) => {
  const encodeMessage = encodeURIComponent(message);
  const shareUrl = window.location.href;

  return (
    <div>
      <FacebookShareButton url={shareUrl} quote={message}>Share on Facebook</FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={message}>Share on Twitter</TwitterShareButton>
      <LinkedinShareButton url={shareUrl} title={message}>Share on LinkedIn</LinkedinShareButton>
    </div>
  );
};

export default ShareButton;
