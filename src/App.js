import "./SCSS/App.scss";
import Header from "./Components/header";
import Hero from "./Components/hero";
import Card from "./Components/card";
import Footer from "./Components/footer";

import ArticleData from "./data";

function App() {

  const items = [
    "Audi",
    "VW",
    "BMW",
    "Renault",
    "Mazda",
    "Toyota"
  ]

  const Articles = ArticleData.map(article => {
    return (
      <Card
        key={article.id}
        {...article}
      />
    );
  });

  return (
    <>
      <Header />

      <Hero />

      <div className="container flex">{Articles}</div>

      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <Footer />
    </>
  );
}

export default App;
