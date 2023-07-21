import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  {
    id: "heading1",
    className: "heading",
    ["data-head"]: "Greet Message",
    ["aria-label"]: "Greeting",
  },
  "Hello World from React!"
);
// console.log(heading); // object
// root.render(heading);

// const child = React.createElement("div", { id: "child" }, heading);
// const parent = React.createElement("div", { id: "parent" }, child);
// root.render(parent);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

// JSX

console.log(parent);
root.render(parent);
// ReactElement(object) => HTMLElement
