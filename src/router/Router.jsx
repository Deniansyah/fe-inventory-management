import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
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
      <PrivateRoute path="/users">
        <Users />
      </PrivateRoute>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  return(
    <Route 
      {...rest} 
      render={() => {
        return isAuthenticated ? (
          children
        ) : (
          <Redirect to={{pathname : "/login"}} />
        )
      }} 
    /> 
  )
}

export default Router;
