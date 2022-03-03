import React, { createContext, useContext, useState } from "react";
import messagesData from "../Data/messages.json";

const MessageContext = createContext();
export const useMessages = () => useContext(MessageContext);

export function MessageProvider({ children }) {
  const [messages, setMessages] = useState(messagesData);
  const [found, setFound] = useState("");

  const searchMessages = (text) => {
    if (text !== "") {
      setFound(
        messages.filter((message) =>
          message.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFound("");
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
