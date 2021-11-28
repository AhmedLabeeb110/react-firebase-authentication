import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles.css";
import TopNav from "./Components/TopNav.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Footer />
    </div>
  );
}

export default App;
