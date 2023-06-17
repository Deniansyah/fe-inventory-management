import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Product from "../pages/Product";
import Stock from "../pages/Stock"
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
      <Route path="/stock">
        <Stock />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Router;
