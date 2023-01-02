import React from "react";
import Navbar from "./FirstPage/Navbar";
import TextSection from "./FirstPage/TextSection";
import Pizza from "./FirstPage/PizzaMain";
import FirstHalf from "./SecondPage/FirstHalf";
import SecondHalf from "./SecondPage/SecondHalf";
import MenuCategories from "./ThirdPage/MenuCategories"
import Slider from "./ThirdPage/Slider";

function App() {
  return (
    <div className="App">
          <Navbar />
          <TextSection />
          <Pizza />
        <FirstHalf />
        <SecondHalf />
        <MenuCategories />
        <Slider />
      </div>
      
    
  );
}

export default App;
