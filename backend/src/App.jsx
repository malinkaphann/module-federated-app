import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@/components/Dashboard";
import Users from "@/components/Users";
import Products from "@/components/Products";
import Blog from "@/components/Blog";
import "@/shared/styles/global.scss";
import "@/styles/main.scss";

const App = ({ history }) => (
  <HashRouter history={history}>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="products" element={<Products />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  </HashRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
