import React, { useEffect, useState } from 'react';
import { fetchDailyMessage } from '../services/messageService';

const DailyMessageDisplay = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const data = await fetchDailyMessage();
        setMessage(data);
      } catch (err) {
        setError('Failed to load the daily message.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
    // Optional: Set up interval to refetch message
    const interval = setInterval(fetchMessage, 24 * 60 * 60 * 1000); // 24 hours
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Today's Divine Message</h2>
      <p>{message.content}</p>
      <small>{new Date(message.timestamp).toLocaleString()}</small>
    </div>
  );
};

export default DailyMessageDisplay;