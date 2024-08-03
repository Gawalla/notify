"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const socket = io("http://localhost:3001");

socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  console.log(socket.connected); // true
});

const ChatBoxClient = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessageToServer = (message) => {
    if (message.trim()) {
      socket.emit("sendMessage", message);
      setMessages([...messages, message]);
      // console.log(messages)
      setMessage("");
    }
  };
  const buttonRef = useRef();

  const handleClick = () => {
    // Access the button element using buttonRef.current
    buttonRef.current.click();
  };

  // socket.on("response", (response) => {
  //     setMessages([ ...messages,message ] )
  //     console.log(messages)
  //     console.log(response);

  // });
  useEffect(() => {
    socket.on("response", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("response");
    };
  }, []);

  socket.on("welcome", (message) => {
    setMessages([...messages, message]);
  });

  return (
    <div className="flex flex-grow flex-col h-screen bg-slate-900">
      <div className=" h-12 text-white flex justify-center bg-slate-800 ">
        shivam
      </div>
      <div className="flex-1 overflow-y-autobg-slate-900 p-4 ">
        <div>
          <Link
            href="/components/auth"
           className="text-white text-2xl"
          >
            login
          </Link>
        </div>
        {messages.map((msg, index) => (
          <div key={index} className="p-2 mb-2 bg-gray-200 rounded">
            {msg}
          </div>
        ))}
      </div>
      <div className="  bg-slate-800  flex">
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="flex-1  text-white bg-slate-800  p-2"
          placeholder="Type a message"
        />
        <button
          id="sendButton"
          onClick={() => sendMessageToServer(message)}
          ref={buttonRef}
          className="bg-blue-500  p-2 w-16 active:bg-blue-500"
        >
          <FontAwesomeIcon icon={faShare} />
        </button>
      </div>
    </div>
  );
};

export default ChatBoxClient;
