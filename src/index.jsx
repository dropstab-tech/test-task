import React from "react";
import { render } from "react-dom";

import logo from "./assets/drop.png";

const App = () => {
  return <div class="p-10">
    <div class="flex space-x-4 items-center mb-10">
      <img src={logo} class="h-10" />
      <h1 class="text-3xl font-bold">Test Task React</h1>
    </div>

    <div class="bg-gray-100 rounded w-full h-80"></div>
  </div>;
};

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
