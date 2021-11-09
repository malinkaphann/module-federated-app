import React from "react";
import ReactDOM from "react-dom";
import UserList from "@/components/UserList";
import "@/styles/main.css";

const App = () => (
  <div className="container">
    <UserList />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
