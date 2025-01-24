import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const fetchMessages = async () => {
    const response = await axios.get('http://messengerapi:30002/messages');
    setMessages(response.data);
  };

  const addMessage = async () => {
    if (newMessage.trim()) {
      await axios.post('http://messengerapi:30002/messages', { message: newMessage });
      setNewMessage('');
      fetchMessages();
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Message Board</h1>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Write a message"
      />
      <button onClick={addMessage}>Submit</button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
