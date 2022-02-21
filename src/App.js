import "./SCSS/App.scss";
import Header from "./Components/header";
import Hero from "./Components/hero";
import Card from "./Components/card";
import Footer from "./Components/footer";

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
