import React, { createContext, useContext, useState } from "react";
import messagesData from "../Data/messages.json";

const MessageContext = createContext();
export const useMessages = () => useContext(MessageContext);

export function MessageProvider ({ children }) {
    const [messages, setMessages] = useState(messagesData);

    const removeMessage = id => setMessages(messages.filter(message => message.id !== id))
    return(
        <MessageContext.Provider value={{messages, removeMessage}}>
            {children}
        </MessageContext.Provider>
    )
}