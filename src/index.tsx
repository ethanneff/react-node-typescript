import React from "react";
import ReactDOM from "react-dom";
import { App } from "./client/containers";
import * as serviceWorker from "./client/utils/serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
