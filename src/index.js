import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Root from "./containers/Root";
import { BrowserRouter} from "react-router-dom";

const routes = (
  // <BrowserRouter>
  //   <Switch>
  //     <Route path="/home" component={Root} />
  //     <Redirect from="/" to="/home" />
  //   </Switch>
  // </BrowserRouter>
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
