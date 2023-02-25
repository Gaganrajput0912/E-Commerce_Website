import { Fragment, useState } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Body from "./Components/Layout/Body/body";
import Footer from "./Components/Layout/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";
import AboutUs from "./Components/Pages/AboutUs";
import Home from "./Components/Pages/Home";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      <CartProvider>
        {cartIsShown && <Cart onClose={HideCartHandler} />}
        <Header onShowCart={ShowCartHandler} />
        <Route path="/AboutUs">
        <AboutUs/>
      </Route>
      <Route path="/Home">
        <Home/>
      </Route>
        <Footer />
      </CartProvider>


      

    </Fragment>
  );
}

export default App;
