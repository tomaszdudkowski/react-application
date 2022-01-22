import "./SCSS/App.scss";
import Header from "./Components/header";
import Hero from "./Components/hero";
import Card from "./Components/card";
import Welcome from "./Components/welcome";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="wrapper">
        <Welcome />
        <Card 
          img={require('./Image/Card_Image/card_1.jpg')}
          rate="5.0"
          city="Lodz"
          cost="2300"
        />
        <Card 
          img={require('./Image/Card_Image/card_2.jpg')}
          rate="5.3"
          city="Warsaw"
          cost="4500"
        />
        <Card 
          img={require('./Image/Card_Image/card_3.jpg')}
          rate="4"
          city="Wroclaw"
          cost="1600"
        />
        <Card 
          img={require('./Image/Card_Image/card_1.jpg')}
          rate="3.5"
          cost="1000"
        />
      </div>
    </div>
  );
}

export default App;
