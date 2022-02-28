import "./SCSS/App.scss";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import MostPopular from "./Components/MostPopular";
import Footer from "./Components/Footer";

import articles from "./articles.json";
import popular from "./mostpopular.json";

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
