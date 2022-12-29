import React from 'react';
import  Navbar from './Navbar';
import TextSection from './TextSection';
import Pizza from './PizzaMain';
import FirstHalf from './SecondPage/FirstHalf';
import SecondHalf from './SecondPage/SecondHalf';


function App() {
  return (
    <div className="App">
      <div className="Main-bg">
    <div className="Navbar">
       <React.Fragment>
        <Navbar/>
       </React.Fragment>
       </div>
       <div className="TextSection">
       <React.Fragment>
        <TextSection/>
       </React.Fragment>
       </div> 
       <div className="PizzaMain">
       <React.Fragment>
        <Pizza/>
       </React.Fragment>
       </div> 
       
      </div>
      <div className='SecondPage'>
      <React.Fragment>
        <FirstHalf/>
       </React.Fragment>
       
       <React.Fragment>
        <SecondHalf/>
       </React.Fragment>
       

      </div>
    </div>

  );
}

export default App;
