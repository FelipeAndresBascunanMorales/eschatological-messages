import React, { useState, useEffect } from 'react';
import MessageDisplay from '../components/MessageDisplay';
import ShareButton from '../components/ShareButton';
import './Home.css';

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>('Stay positive, work hard, make it happen!');
  const [backgroundColor, setBackgroundColor] = useState<string>('#f0e68c');

  useEffect(() => {
    // Additional logic to fetch message and color can be added here
  }, []);

  return (
    <div className='home'>
      <MessageDisplay message={message} backgroundColor={backgroundColor} />
      <ShareButton message={message} />
    </div>
  );
};

export default Home;
