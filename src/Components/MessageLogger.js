import React, { useContext } from "react";
import Message from "./Elements/_Message";
import { MessageContext } from "../App";

export default function MessageLogger({
  messagesA = [],
  onRemoveMessage = (f) => f
}) {
  const { messages } = useContext(MessageContext);
  //if (!messages.length) return <div>Brak wiadomości.</div>;

  const MessageItem = messages.map((message) => {
    return <Message {...message} onRemove={onRemoveMessage} />;
  });

  return (
    <div className="messages-wrapper">
      <h1>Messages</h1>
      {MessageItem}
    </div>
  );
}
