import React from 'react';
import DailyMessageDisplay from '../components/DailyMessageDisplay';
import MessageDisplay from '../components/MessageDisplay';
import ShareButton from '../components/ShareButton';
import './Home.css';

const Home: React.FC = () => {
    // Sample message and color
    const message = "Stay positive, work hard, make it happen!";
    const backgroundColor = "#f0e68c";

    return (
        <div className="home-container">
            <DailyMessageDisplay />
            <MessageDisplay message={message} backgroundColor={backgroundColor} />
            <ShareButton message={message} />
        </div>
    );
};

export default Home;
