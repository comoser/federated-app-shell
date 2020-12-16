import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import configureI18n from "./i18n";

configureI18n();

ReactDOM.render(<App/>, document.getElementById("root"));
