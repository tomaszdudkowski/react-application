import React from "react";
import { useMessages } from "../Hooks/MessageHooks";
import Message from "./Elements/_Message";

import "../SCSS/Components/_messageLogger.scss";
import "../SCSS/Layout/_flex.scss";

export default function MessageLogger() {
  const { messages } = useMessages();
  if (!messages.length)
    return (
      <div className="message-logger flex">
        <h1 className="title">Messages</h1>
        <p>Brak wiadomości do wyświetlenia.</p>
      </div>
    );

  const MessageItem = messages.map((message) => {
    return <Message {...message} />;
  });

  return (
    <div className="message-logger flex">
      <h1 className="title">Messages</h1>
      <div className="flex wrap messages-wrapper">{MessageItem}</div>
    </div>
  );
}
