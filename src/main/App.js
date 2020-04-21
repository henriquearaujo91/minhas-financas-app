import "bootswatch/dist/flatly/bootstrap.css";
import React from "react";
import "../custom.css";
import Rotas from "./rotas";
import Navbar from "../components/navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Rotas />
        </div>
      </div>
    );
  }
}

export default App;
