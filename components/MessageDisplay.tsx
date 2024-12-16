import React from 'react';
import './MessageDisplay.css';

interface MessageDisplayProps {
    message: string;
    backgroundColor: string;
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ message, backgroundColor }) => {
    return (
        <div className="message-display" style={{ background: backgroundColor }}>
            <p className="message-text">{message}</p>
        </div>
    );
}

export default MessageDisplay;
