import React from "react";

import Message from "./Elements/_Message";

export default function MessageLogger({ messages }) {
    
    const Info = messages.map(message => {
        return <Message {...message} />
    })

    return (
    <div className="messages-wrapper">
      <h1>Messages</h1>
      {Info}
    </div>
  );
}
