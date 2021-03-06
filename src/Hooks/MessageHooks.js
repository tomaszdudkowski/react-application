import React, { createContext, useContext, useState, useEffect, useLayoutEffect } from "react";
import messagesData from "../Data/messages.json";

const MessageContext = createContext();
export const useMessages = () => useContext(MessageContext);

export function MessageProvider({ children }) {
  const [messages, setMessages] = useState(messagesData);
  const [found, setFound] = useState(messages);
  
  useLayoutEffect(() => {
    console.log("Render Messages Grid")
  
    return () => {
      console.log("Unmounted Messages Grid!")
    }
  })

  const searchMessages = (text) => {
    if (text !== "") {
      setFound(
        messages.filter((message) =>
          message.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFound(messages);
    }
  };

  const removeMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
    setFound(found.filter((message) => message.id !== id));
  };
  const searchMessage = (text) => searchMessages(text);
  return (
    <MessageContext.Provider
      value={{ messages, found, removeMessage, searchMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
}
