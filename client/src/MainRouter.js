import React from "react";
import { Route, Switch } from "react-router-dom";

// Main Routes
import Navigation from "../src/Components/Nav";
import Home from "../src/Components/Home";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import NotFound from "../src/Components/NotFound";

// Bug Routes
import getBugs from "../src/Components/bugs/getBugs";
import MonthBugs from "./Components/bugs/monthBugs";

// Fish Routes
import getFish from "../src/Components/fish/getFish";
import MonthFish from "./Components/fish/monthFish";

// Flower Routes
import getFlowers from "../src/Components/flower/getFlowers";
import getByGenus from "./Components/flower/getByGenus";

// Sea Creature Routes
import getSea from "./Components/sea/getSea";
import MonthSea from "./Components/sea/monthSea";

// Fossil Routes
import getFossils from "./Components/fossils/getFossils";

const MainRouter = () => (
  <div>
    <Header />
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bugs" component={getBugs} />
      <Route exact path="/fish" component={getFish} />
      <Route exact path="/sea" component={getSea} />
      <Route exact path="/fossils" component={getFossils} />
      <Route exact path="/flower" component={getFlowers} />
      <Route exact path="/flower/:genus" component={getByGenus} />
      <Route exact path="/fish/:hem/:month" component={MonthFish} />
      <Route exact path="/bugs/:hem/:month" component={MonthBugs} />
      <Route exact path="/sea/:hem/:month" component={MonthSea} />
      <Route exact path="*" component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default MainRouter;
