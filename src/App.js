import React from "react";
import { Route } from "react-router-dom";
import Logined from "./components/login";
import NonLogin from "./components/non_login";


const App = () => {
  return (
    <div>
      <Logined></Logined>
    </div>
  );
};
export default App;
