import React from "react";
import ReactDOM from "react-dom";
import SaleChart from "@/components/SaleChart";
import "@/shared/styles/global.scss";
import "@/styles/main.css";

const App = () => {
  return (
    <div>
      <SaleChart />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
