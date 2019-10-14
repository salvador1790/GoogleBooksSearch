import React from 'react';
import NavBar from "./components/nav"
import Banner from "./components/banner"
import Jumbotron from "./components/jumbotron"
import SearchForm from "./components/SearchForm"
import "./App.css";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <div id="bannerCont">
      
      <Banner/>
      </div>
    <Jumbotron/>
    </div>
  );
}

export default App;
