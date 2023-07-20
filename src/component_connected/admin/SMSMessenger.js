import React, { useState } from 'react';
import axios from 'axios';

const SMSMessenger = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post('https://api.twilio.com/2010-04-01/Accounts/AC5bddd7c498ea4ef2df73f5145e521fd2/Messages.json', {
        To: phoneNumber,
        From: '+21694868556',
        Body: newMessage
      }, {
        auth: {
          username: 'AC5bddd7c498ea4ef2df73f5145e521fd2',
          password: '4c132c3e5f9c5758ceefba485d48d660'
        }
      });

      const message = response.data;

      setMessages([...messages, message]);
      setNewMessage('');
    } catch (error) {
      console.log('Error sending SMS:', error);
    }
  };

  return (
    <div>
      <h2>SMS Messenger</h2>
      <div>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Enter your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <br />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        {messages.map((message) => (
          <div key={message.sid}>
            <p>From: {message.from}</p>
            <p>To: {message.to}</p>
            <p>{message.body}</p>
            <p>{message.date_created}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SMSMessenger;


/*import React, { useState } from 'react';

const SMSMessenger = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const sendMessage = () => {
    // Appel à l'API SMS pour envoyer le message
    // Ici, nous simulons simplement l'ajout du message à la liste des messages
    const message = {
      id: Math.random().toString(36).substring(7),
      body: newMessage,
      sender: 'Me',
      receiver: phoneNumber,
      timestamp: new Date().toLocaleString()
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div>
      <h2>SMS Messenger</h2>
      <div>
        <input
          type="text"
          placeholder="Numéro de téléphone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Saisir votre message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <br />
        <button onClick={sendMessage}>Envoyer</button>
      </div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <p>De: {message.sender}</p>
            <p>À: {message.receiver}</p>
            <p>{message.body}</p>
            <p>{message.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SMSMessenger;
*/