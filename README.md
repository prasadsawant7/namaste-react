* npm start is equivalent to npm run start, because npm has already reserved a keyword for start.
* To build the project we'll use npm run build.

1. In JS, we have DOM Elements, just like we have React Elements in React which are equivalent to DOM Elements.
2. While dealing with Browser's DOM API we have been provided with a separate package as ReactDOM.
3. Core React will create an React Element object but ReactDOM will render it in the browser.
4. JSX is not a part of React.
5. JSX is different and React is different.

* **Transpile**: Transpiling is the process of taking source code written in one language and transforming it into another language that has a similar level of abstraction.
* **JSX:**
  * JS doesn't comes with JSX, even Browser's JS Engine doesn't understand JSX, JS Engine only understands ECMAScript.
  * Even ReactDOM can't understand JSX.
  * Even before JSX reaching to JS engine Module Bundlers like Parcel (It manages all packages one of them which is responsible for transpiling JSX is Babel) transpiles the JSX.
  * As soon as we write code and saves the file Parcel builds the project and during that process Babel transpiles the JSX code.
  * Then the transpiled JSX code can be understtod by React, ReactDOM and Browser's JS Engine.
  * Babel is not created by Facebook.
  * JSX is transpiled to React.createElement by Babel, then React.createElement conerted to an ReactElement (JS Object). Then this object is rendered as HTMLElement.
  * JSX can have only one parent element.
  * Babel is JS compiler, transpiler.
  * Babel also transpiles the Newer EcmaScript to older EcmaScript to support older Browsers.
  * If we have multiline JSX we need to wrap that code inside () round brackets to be able to understand by Babel.

> **Component Composition:** Composing 2 or more Components in one another
