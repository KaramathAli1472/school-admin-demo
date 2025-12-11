import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Teacher", text: "Good morning, please submit homework." },
    { id: 2, sender: "Parent", text: "Sure, will do today." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { id: messages.length + 1, sender: "Parent", text: newMessage }]);
    setNewMessage("");
  };

  const chatBoxStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    height: "300px",
    overflowY: "scroll",
    marginBottom: "10px",
    backgroundColor: "#f9f9f8",
  };

  const messageStyle = (sender) => ({
    textAlign: sender === "Parent" ? "right" : "left",
    margin: "5px 0",
  });

  return (
    <div style={{ padding: 40 }}>
      <h1>Parent-Teacher Chat</h1>
      <div style={chatBoxStyle}>
        {messages.map((m) => (
          <div key={m.id} style={messageStyle(m.sender)}>
            <strong>{m.sender}: </strong>{m.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ padding: "8px", width: "70%" }}
      />
      <button onClick={sendMessage} style={{ padding: "8px 16px", marginLeft: "10px" }}>
        Send
      </button>
    </div>
  );
};

export default Chat;

