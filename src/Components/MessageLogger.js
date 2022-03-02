import React from "react";
import { useMessages } from "../ContextProviders/MessageHooks";
import Message from "./Elements/_Message";

export default function MessageLogger() {
  const { messages } = useMessages();
  if (!messages.length) return <div>Brak wiadomości.</div>;

  const MessageItem = messages.map((message) => {
    return <Message {...message} />;
  });

  return (
    <div className="messages-wrapper">
      <h1>Messages</h1>
      {MessageItem}
    </div>
  );
}
