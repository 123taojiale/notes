import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function A() {
  return <h1>组件A</h1>;
}

function B() {
  return <h1>组件B</h1>;
}

function C() {
  return (
    <h1>
      找不到页面
      <Route path="/abc" exact component={D} />
    </h1>
  );
}

function D() {
  return <span>D组件</span>;
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/a/b" component={B} />
        <Route path="/a" exact component={A}>
          {() => {
            return (
              <div>
                <h1 style={{ color: "red" }}>必定会看到的内容</h1>
                <p>adfasdfasdf</p>
              </div>
            );
          }}
        </Route>
        <Route component={C} />
      </Switch>
    </Router>
  );
}