import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";

//pages
import Login from "./user/Login";
import Register from "./user/Register";
import Logout from "./components/Header/Logout";

import ProductList from "./pages/Luggage/ProductList";
import ProductListH from "./pages/Luggage/ProductListH";

import AccList from "./pages/Accessories/AccList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartWrapper from "./pages/ShoppingBag/CartWrapper";
import Unique from "./pages/Unique/UniqueMain";
import OrderSumm from "./pages/ShoppingBag/OrderSumm";
import StoreLocator from "./pages/StoreLocator/StoreLocator";
import CheckOut from "./shop/CheckOut/CheckOut";
import UniqueTag from "./pages/Unique/UniqueTag";
import OrderConfirmation from "./pages/Etc/OrderConfirmation";
import PageNotFound from "./pages/Etc/PageNotFound";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ListH from "./pages/Luggage/ProductListH";
import Header from "./components/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const Routes = () => {
  const [user, setUser] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const user = jwtDecode(token);
      setUser(user);
      console.log(user);
    } catch (ex) {
      setUser(null);
    }
  }, []);

  return (
    <Router>
      <div>
        <div style={{ backgroundColor: "white" }}>
          <Header user={user} />
          <Nav />
        </div>

        <Switch>
          <Route exact path="/" component={Unique}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/logout" component={Logout}></Route>

          <Route exact path="/products" component={ProductListH} />

          <Route exact path="/product" component={ProductDetail}></Route>
          <Route exact path="/product/:id" component={ProductDetail}></Route>
          <Route exact path="/cart" component={CartWrapper}></Route>
          <Route exact path="/ordersumm" component={OrderSumm}></Route>
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/accList" component={AccList} />
          <Route exact path="/locator" component={StoreLocator} />
          <Route exact path="/CheckOut" component={CheckOut}></Route>
          <Route exact path="/Uniquetag" component={UniqueTag}></Route>
          <Route exact path="/shoppingcart" component={ShoppingCart}></Route>
          <Route exact path="/listh" component={ListH}></Route>
          <Route
            exact
            path="/ordersuccess"
            component={OrderConfirmation}
          ></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default Routes;
