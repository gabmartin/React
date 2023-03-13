import React from "react";
import { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import Header from "./Components/header";
import Item from "./Components/item";
import Search from "./Components/search";
import NotFound from "./Components/search";
import { HashRouter, Route } from "react-router-dom";

class App extends Component {
  handleSubmit = (evento, history, searchInput) => {
    evento.preventDefault();
    evento.current.target.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };
  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="SnapScout">
          <div>
            <Router
              render={(props) => {
                <Header
                  handleSubmit={this.handleSubmit}
                  history={history}
                ></Header>;
              }}
            ></Router>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
