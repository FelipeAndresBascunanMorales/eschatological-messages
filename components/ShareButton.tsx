import React from 'react';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';

interface ShareButtonProps {
  message: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ message }) => {
  const shareUrl = window.location.href;

  return (
    <div className="share-buttons">
      <FacebookShareButton url={shareUrl} quote={message}>Share on Facebook</FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={message}>Share on Twitter</TwitterShareButton>
      <EmailShareButton url={shareUrl} subject="Daily Motivation" body={message}>Share via Email</EmailShareButton>
    </div>
  );
};

export default ShareButton;
