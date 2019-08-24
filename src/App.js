import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Home from "./pages/Home";
import { Country, Countries } from "./pages/Country";
import Page404 from "./pages/Page404";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Button from "./components/Button";
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

function App() {
  return (
    <div className="App">
      <h1>Get Country Code</h1>
      <Link to={"/"}>
        <Button>Home</Button>
      </Link>
      <Link to="/countries">
        <Button>Countries</Button>
      </Link>
      <ApolloProvider client={client}>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/countries"} exact component={Countries} />
          <Route path={"/countries/:code"} exact component={Country} />
          <Route path="*" component={Page404} />
        </Switch>
      </ApolloProvider>
    </div>
  );
}

export default App;
