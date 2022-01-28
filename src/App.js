import "./SCSS/App.scss";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

import ArticleData from "./data";

function App() {
  const Articles = ArticleData.map((article) => {
    return (
      <Card
        key={article.id}
        {...article}
      />
    );
  });

  return (
    <div>
      <Header />

      <Hero />

      <div className="container flex wrap">{Articles}</div>

      <Footer />
    </div>
  );
}

export default App;
