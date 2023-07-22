import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement (JS Object) => HTMLElement (after render)

// Create a React Element Object
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

// Create a React Root
// const root = ReactDOM.createRoot(document.getElementById("root"));

/*
 * ReactDOM takes React Element Object and converts it into an HTML Element
 * and replaces every content which is inside that root element.
 */
// root.render(heading);

// JSX (It's just an Syntax) => HTML or XML like Syntax (It's not HTML or XML in JS)
// When below line is executed then the jsxHeading will be React Element object.
// JSX => React.createElement (Transpiled by Babel) => ReactElement (JS Object) => HTMLElement (after render)
// const jsxHeading = (
//   <h1 id="heading" className="head">
//     Namasete React using JSX 🚀
//   </h1>
// );
// console.log(jsxHeading);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Element
// const header = (
//   <span id="header" className="header">
//     Namaste React Element
//   </span>
// );
// const heading = (
//   <h1 id="heading" className="head">
//     {/* React Element inside React Element */}
//     {header}
//     Namaste React using JSX 🚀
//   </h1>
// );

// React Component
/*
 * Class Based Component - Old
 * Functional Component - New
 */

/*
 * React Functional Component
 * Function which returns a JSX code is a Functional Component
 * OR
 * A JS function which returns an React Element.
 */
// const HeadingComponent1 = () => {
//   return <h1>Namaste React Functional Component 1</h1>;
// };

// const HeadingComponent2 = () => <h1>Namaste React Functional Component 2</h1>;

// const HeadingComponent3 = () => (
//   <h1 id="heading" className="heading">
//     Namaste React Functional Component 3
//   </h1>
// );

// const Title = () => (
//   <h1 id="head" className="head">
//     Namaste React using JSX 🚀
//   </h1>
// );

// const Title1 = function () {
//   return (
//     <h1 id="head" className="head">
//       Namaste React using (anonymous function) JSX 🚀
//     </h1>
//   );
// };

// function Title2() {
//   return (
//     <h1 id="head" className="head">
//       Namaste React using (normal function) JSX 🚀
//     </h1>
//   );
// }

// const number = 10000;

// const HeadingComponent = () => (
//   // Component Composition => Composing 2 or more Components in one another.
//   <div id="container">
//     <h2>{number}</h2>
//     <h2>{100 + 200}</h2>
//     <h2>{console.log("Namaste React")}</h2>
//     {/* React Element inside React Component */}
//     {heading}
//     <Title />
//     <Title1 />
//     <Title2 />
//     <h1 className="heading">Namaste React Functional Component</h1>
//     <HeadingComponent1 />
//     <HeadingComponent2 />
//     <HeadingComponent3 />
//   </div>
// );

// const TitleElement = (
//   <div className="titleElement">
//     <h1>Heading Component inside Title Element</h1>
//     {/* React Component inside React Element */}
//     <HeadingComponent />
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<HeadingComponent />);
// root.render(TitleElement);

const TitleComponent = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

const data = 1000;

const HeadingComponent4 = () => (
  // JSX can have only one root or parent element
  // JSX created an empty tag
  <>
    {/* React Fragment - behaves like an empty tag (Provided by React) */}
    <React.Fragment>
      <div id="container">
        {/* JSX sanitises the below data inside {} brackets */}
        {data}
        <TitleComponent />
        <TitleComponent></TitleComponent>
        {/* We can call any functional component inside {} brackets */}
        {TitleComponent()}
        <h1 className="heading">Namaste React Functional Component</h1>
      </div>
      <div id="container-2">
        {/* JSX sanitises the below data inside {} brackets */}
        {data}
        <TitleComponent />
        <TitleComponent></TitleComponent>
        {/* We can call any functional component inside {} brackets */}
        {TitleComponent()}
        <h1 className="heading">Namaste React Functional Component</h1>
      </div>
    </React.Fragment>
    <React.Fragment>
      <div id="container">
        {/* JSX sanitises the below data inside {} brackets */}
        {data}
        <TitleComponent />
        <TitleComponent></TitleComponent>
        {/* We can call any functional component inside {} brackets */}
        {TitleComponent()}
        <h1 className="heading">Namaste React Functional Component</h1>
      </div>
      <div id="container-2">
        {/* JSX sanitises the below data inside {} brackets */}
        {data}
        <TitleComponent />
        <TitleComponent></TitleComponent>
        {/* We can call any functional component inside {} brackets */}
        {TitleComponent()}
        <h1 className="heading">Namaste React Functional Component</h1>
      </div>
    </React.Fragment>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent4 />);
