import React from 'react';
import { shareMessage } from '../services/shareService';

interface ShareButtonProps {
  message: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ message }) => {
  const handleShare = () => {
    shareMessage(message);
  };

  return (
    <button onClick={handleShare} className="share-button">
      Share
    </button>
  );
};

export default ShareButton;
