// import React from "react";
// import ReactDOM from "react-dom";

// // const names = ["sena", "orhan", "öznur"];

// const str1 = "click ";
// const str2 = "me";

// function App() {
//   return (
//     <button type="button" style={{ background: "red", padding: "10px" }}>
//       {str1.concat(str2)}
//     </button>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
