import React from 'react';
import MessageDisplay from '../components/MessageDisplay';
import ShareButton from '../components/ShareButton';

const Home: React.FC = () => {
  const message = "Stay positive and keep pushing forward!";
  const backgroundColor = "#f0f8ff";

  return (
    <div className="home-container">
      <MessageDisplay message={message} backgroundColor={backgroundColor} />
      <ShareButton message={message} />
    </div>
  );
};

export default Home;
