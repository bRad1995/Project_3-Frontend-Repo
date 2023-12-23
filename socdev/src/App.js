import React from "react";
import Home from "./components/home";
import Nav from "./components/nav";

function App() {

const home = [
  {
    image: "https://i.imgur.com/mYN2Vaf.jpg",
    name: "Tracey Carpenter"
  },
  {
    image: "https://i.imgur.com/mYN2Vaf.jpg",
    name: "Karol Morgan"
  },
  {
    image: "https://i.imgur.com/mYN2Vaf.jpg",
    name: "Bradlee Williams"
  },
  {
    image: "https://i.imgur.com/mYN2Vaf.jpg",
    name: "Petal Ladenson"
  },
  
]


  return (
    <div className="App">
      <Nav />
     <Home home={home}
     />
    </div>
  );
}

export default App;
