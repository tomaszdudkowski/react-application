import React, {createContext} from "react";

import "./SCSS/App.scss";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import MostPopular from "./Components/MostPopular";
import MessageLogger from "./Components/MessageLogger";
import Footer from "./Components/Footer";

import articles from "./articles.json";
import popular from "./mostpopular.json";
import messagesData from "./messages.json";
import { useState } from "react";

export const MessageContext = createContext();

function App() {
  const [messages, setMessages] = useState(messagesData);

  const Articles = articles.map((article) => {
    return <Card key={article.id} {...article} />;
  });

  return (
    <>
      <Header />

      <Hero />

      <div className="container flex">
        {Articles}
        <MostPopular articles={popular} />
      </div>
      <div className="container flex">
        
        <MessageContext.Provider value={{ messagesData }}>
        <MessageLogger
          onRemoveMessage={(id) => {
            const newMessages = messages.filter(
              (messages) => messages.id !== id
            );
            setMessages(newMessages);
          }}
        />
        </MessageContext.Provider>
      </div>

      <Footer />
    </>
  );
}

export default App;
