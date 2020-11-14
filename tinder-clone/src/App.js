import React from "react";
import "./App.css";
import Header from "././components/Header/Header";
import TinderCard from "././components/TinderCards/TinderCards";
import SwipeButtons from "././components/SwipeButtons/SwipeButtons";

function App() {
  return (
    //Bem class naming convention
    <div className="app">
      {/*Header*/}
      <Header />
      {/*TinderCards*/}
      <TinderCard />
      {/*SwipeButtons*/}
      <SwipeButtons />

     
        
    </div>
  );
}

export default App;
