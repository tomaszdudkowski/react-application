import React from "react";
import { useMessages } from "../Hooks/MessageHooks";
import Message from "./Elements/_Message";

import "../SCSS/Components/_messageLogger.scss";
import "../SCSS/Layout/_flex.scss";

export default function MessageLogger() {
  const { messages, found } = useMessages();

  if (!messages.length) {
    return (
      <div className="message-logger flex">
        <h1 className="title">Messages</h1>
        <p>Brak wiadomości do wyświetlenia.</p>
      </div>
    );
  }
  let MessageItem;
  if (found === "") {
    MessageItem = messages.map((message) => {
      return <Message key={message.id} {...message} />;
    });

    return (
      <div className="message-logger flex">
        <h1 className="title">Messages</h1>
        <div className="flex wrap messages-wrapper">{MessageItem}</div>
      </div>
    );
  } else {
    MessageItem = found.map((message) => {
      return <Message key={message.id} {...message} />;
    });

    return (
      <div className="message-logger flex">
        <h1 className="title">Messages</h1>
        <div className="flex wrap messages-wrapper">{MessageItem}</div>
      </div> )
  }
}