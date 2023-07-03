import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/BrowseProducts/AllProducts";
import SingleProduct from "./components/SingleProduct/SingleProductView";
// import CategoryView from "./components/BrowseProducts/CategoryView";
import PokeHome from "./components/PokeHome";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cart from "./components/Cart";
import UserProfile from "./components/AccountView/UserProfile";
import OrderHistory from "./components/AccountView/OrderHistory";
import SingleOrder from "./components/AccountView/SingleOrder";
import AddressBook from "./components/AccountView/AddressBook";
import PaymentCards from "./components/AccountView/PaymentCards";
import Feedback from "./components/AccountView/Feedback";
import Signout from "./components/Signout";
import Dashboard from "./components/AccountView/Dashboard";
import UserTable from "./components/AdminView/UserTable";
import EditUser from "./components/AdminView/EditUser";
import EditProduct from "./components/AdminView/EditProduct";
import AddUser from "./components/AdminView/AddUser";
import AddPokemon from "./components/AdminView/AddPokemon";
import AddPokeball from "./components/AdminView/AddPokeball";
import AddPotion from "./components/AdminView/AddPotion";
import ProductTable from "./components/AdminView/ProductTable";
import New from "./components/BrowseProducts/New";
import Pokemon from "./components/BrowseProducts/Pokemon";
import Potions from "./components/BrowseProducts/Potions";
import Pokeballs from "./components/BrowseProducts/Pokeballs";
import GenIProducts from "./components/GenerationView/Gen1";
import GenIIProducts from "./components/GenerationView/Gen2";
import GenIIIProducts from "./components/GenerationView/Gen3";
import GenIVProducts from "./components/GenerationView/Gen4";
import GenVProducts from "./components/GenerationView/Gen5";
import Payment from "./components/Payment/Payment"
import Search from "./components/Search";

const App = () => {
  return (
    <>
      <div>{<PokeHome />}</div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route exact path="/products/:id" element={<SingleProduct />} />
        <Route exact path="/products/GenI" element={<GenIProducts />} />
        <Route exact path="/products/GenII" element={<GenIIProducts />} />
        <Route exact path="/products/GenIII" element={<GenIIIProducts />} />
        <Route exact path="/products/GenIV" element={<GenIVProducts />} />
        <Route exact path="/products/GenV" element={<GenVProducts />} />
        <Route exact path="/new" element={<New />} />
        <Route exact path="/category/pokemon-all" element={<Pokemon />} />
        <Route exact path="/category/potions" element={<Potions />} />
        <Route exact path="/category/pokeballs" element={<Pokeballs />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/signout" element={<Signout />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/order-history" element={<OrderHistory />} />
        <Route
          exact
          path="/order-history/single-order"
          element={<SingleOrder />}
        />
        <Route exact path="/address-book" element={<AddressBook />} />
        <Route exact path="/payment-cards" element={<PaymentCards />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard/users" element={<UserTable />} />
        <Route exact path="/dashboard/users/edit/:id" element={<EditUser />} />
        <Route exact path="/dashboard/users/add" element={<AddUser />} />
        <Route exact path="/dashboard/products" element={<ProductTable />} />
        <Route exact path="/search" element={<Search />} />
        <Route
          exact
          path="/dashboard/products/edit/:id"
          element={<EditProduct />}
        />
        <Route
          exact
          path="/dashboard/products/add/pokemon"
          element={<AddPokemon />}
        />
        <Route
          exact
          path="/dashboard/products/add/pokeball"
          element={<AddPokeball />}
        />
        <Route
          exact
          path="/dashboard/products/add/potion"
          element={<AddPotion />}
        />
      </Routes>
    </>
  );
};

export default App;
