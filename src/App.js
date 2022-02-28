import "./SCSS/App.scss";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import MostPopular from "./Components/MostPopular";
import MessageLogger from "./Components/MessageLogger";
import Footer from "./Components/Footer";

import articles from "./articles.json";
import popular from "./mostpopular.json";
import content from "./messages.json";

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
      <MostPopular articles={popular}/>
      </div>
      <div className="container flex">
        <MessageLogger messages={content}/>
      </div>

      <Footer />
    </>
  );
}

export default App;
