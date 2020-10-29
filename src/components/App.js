import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import Footer from './Footer';
import RecipeList from '../pages/RecipeList';
import RecipeDetails from '../pages/RecipeDetails';

function App() {
  return (
    <div className="page">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/recipe">
            <RecipeList />
          </Route>
          <Route exact path="/recipe/:id">
            <RecipeDetails />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
