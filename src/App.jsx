import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    );
  }
}

export default App;
