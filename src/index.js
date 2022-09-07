import React from "react";
import { App } from "./App";
import ReactDOM  from "react-dom";
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./AppRoute";
import { store } from "./state/Store";


const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(<BrowserRouter>
 <AppRoute />
</BrowserRouter>)


