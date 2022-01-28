import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Authors from "./components/Authors/container/AuthorsContainer";
import Books from "./components/Books/container/BooksContainer";
import Categories from "./components/Categories/container/CategoriesContainer";

import Layout from "./layouts/Layout";

function App() {    
  return (
    <Router>
        <div className="App">
            <Switch>           
              <Layout>
                <Route path="/" exact={true}>
                  <Redirect to="/books" />
                </Route>
                <Route path="/authors">
                    <Authors />
                </Route>
                <Route path="/books">
                    <Books />
                </Route>
                <Route path="/categories">
                    <Categories />
                </Route>
              </Layout>
            </Switch>
        </div>
    </Router>

  );
}

export default App;
