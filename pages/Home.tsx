import DailyMessageDisplay from '../components/DailyMessageDisplay';
import MessageDisplay from '../components/MessageDisplay';
import ShareButton from '../components/ShareButton';
import { useState, useEffect } from 'react';

const Home: React.FC = () => {
    const [message, setMessage] = useState('Stay positive and work hard!');
    const [backgroundColor, setBackgroundColor] = useState('#fff');

    useEffect(() => {
        // This could be dynamic from some API
        setBackgroundColor('#FFCC00');
    }, []);

    return (
        <div className="home-container">
            <DailyMessageDisplay />
            <MessageDisplay message={message} backgroundColor={backgroundColor} />
            <ShareButton message={message} />
        </div>
    );
};

export default Home;
