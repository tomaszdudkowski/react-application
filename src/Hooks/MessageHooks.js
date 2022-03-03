import React, { createContext, useContext, useState } from "react";
import messagesData from "../Data/messages.json";

const MessageContext = createContext();
export const useMessages = () => useContext(MessageContext);

export function MessageProvider ({ children }) {
    const [messages, setMessages] = useState(messagesData);

    const removeMessage = id => setMessages(messages.filter(message => message.id !== id))
    const searchMessage = text => setMessages(messages.filter(message => message.message.includes(text) === true || message.title.includes(text)))
    return(
        <MessageContext.Provider value={{messages, removeMessage, searchMessage}}>
            {children}
        </MessageContext.Provider>
    )
}