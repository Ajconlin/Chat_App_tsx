import React, { useState, useEffect, Children } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import ChatBar from './ChatBar';
import { URLSearchParams } from "url";
import MessageInput from './MessageInput';
import Messages from "./Messages";

let socket: SocketIOClient.Socket;

const Chat: React.FC = () => {
  const location = useLocation();
  const ENDPOINT = "localhost:5000";
  const [message, setMessage] = useState<any>('');
  const [messages, setMessages] = useState<string[]>([]);
 

  // set room
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get("name");
    const room = searchParams.get("room");
    
    socket = io(ENDPOINT);

    if (!name || !room) {
      return;
    }

    socket.emit("join", { name, room }, (error: Error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  // message effect
  useEffect(() => {
    socket.on('message', (message: string) => {
      setMessage([...messages, message]);
    })
  }, [message]);

  const sendMessage = (event: KeyboardEvent) => {
    event.preventDefault()
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
 }

  return (
    <>
      <div>
        <div>
          <ChatBar room={name} />
          <Messages messages={messages} name={name} />
          <MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
      </div>
    </>
  );
};

export default Chat;
