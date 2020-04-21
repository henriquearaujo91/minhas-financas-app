import "bootswatch/dist/flatly/bootstrap.css";
import React from "react";
import "../custom.css";
import Rotas from "./rotas";

class App extends React.Component {
  render() {
    return (
      <div>
        <Rotas />
      </div>
    );
  }
}

export default App;
