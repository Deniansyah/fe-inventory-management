import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Product from "../pages/Product";
import AddProduct from "../pages/AddProduct";
import ListProduct from "../pages/ListProduct";
import EditProduct from "../pages/EditProduct";
import Stock from "../pages/Stock"
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/home">
        <Home />
      </PrivateRoute>
      <OperatorRoute path="/product">
        <Product />
      </OperatorRoute>
      <OperatorRoute path="/add-product">
        <AddProduct />
      </OperatorRoute>
      <OperatorRoute path="/list-product">
        <ListProduct />
      </OperatorRoute>
      <OperatorRoute path="/edit-product">
        <EditProduct />
      </OperatorRoute>
      <OperatorRoute path="/stock">
        <Stock />
      </OperatorRoute>
      <AdminRoute path="/users">
        <Users />
      </AdminRoute>
      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>
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
          <Redirect to={{ pathname: "/login" }} />
        )
      }} 
    /> 
  )
}

const AdminRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const role = useSelector((state) => state.auth.role)

  return(
    <Route 
      {...rest} 
      render={() => {
        return isAuthenticated && role === 1 ? (
          children                                                                  
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }} 
    /> 
  )
}

const OperatorRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const role = useSelector((state) => state.auth.role)

  return(
    <Route 
      {...rest} 
      render={() => {
        return isAuthenticated && role !== 1 ? (
          children                                                                  
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }} 
    /> 
  )
}

export default Router;
