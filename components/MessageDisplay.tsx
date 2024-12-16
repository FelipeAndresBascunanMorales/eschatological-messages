import React from 'react';
import './MessageDisplay.css';

interface MessageDisplayProps {
  message: string;
  backgroundColor: string;
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ message, backgroundColor }) => {
  return (
    <div className='message-display' style={{ backgroundColor }}>
      <h1>{message}</h1>
    </div>
  );
};

export default MessageDisplay;
