import React from "react";
import ReactDOM from "react-dom";
import { config as dotEnvConfig } from "dotenv";
import { Web3Provider } from "react-web3";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Load ENV variables
dotEnvConfig({
  path: process.env.NODE_ENV === "production" ? ".env.prod" : ".env"
});

ReactDOM.render(
  <Web3Provider
    onChangeAccount={nextAddress => console.log(nextAddress)}
    // web3UnavailableScreen={() => <div>You need web3!</div>}
    //accountUnavailableScreen={() => <div>Please unlock your wallet!</div>}
  >
    <App />
  </Web3Provider>,
  document.getElementById("root")
);
registerServiceWorker();
