import React from "react";
import ReactDOM from "react-dom/client";


// React Functional Component
const HeadingComponent = () => (
    <div id="container">
    <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 👽
    <HeadingComponent />
  </h1>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
