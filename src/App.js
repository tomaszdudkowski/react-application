import React from "react";

import "./SCSS/App.scss";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import MostPopular from "./Components/MostPopular";
import MessageLogger from "./Components/MessageLogger";
import Footer from "./Components/Footer";
import GitHubUser from "./Components/GitHubUser";

import articles from "./Data/articles.json";
import popular from "./Data/mostpopular.json";

import { MessageProvider } from "./Hooks/MessageHooks";
import SearchForm from "./Components/SearchForm";

function App() {
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
        <MessageProvider>
          <SearchForm />
          <MessageLogger />
        </MessageProvider>
      </div>
      <GitHubUser login={"tomaszdudkowski"}/>
      <Footer />
    </>
  );
}

export default App;
