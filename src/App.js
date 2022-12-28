import React from 'react';
import  Navbar from './Navbar';
import TextSection from './TextSection';


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

      </div>
    </div>
  );
}

export default App;
