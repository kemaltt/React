import React, { Component } from "react";
import "./Body.css";
import styles from "./Body.module.css";
import Main from "./Main";

import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

// Function Component---------------------------------

const Body = ({ age, name, course }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <LeftSideBar content={["Lorem", "Lorem", "Lorem"]} />
      <Main name={name} age={age} course={course} />
      <RightSideBar content={["Lorem", "Lorem", "Lorem"]} />
    </div>
  );
};

export default Body;

// const Body = (props) => {
//   const { age, name, course } = props;

//   return (
//     <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//       <LeftSideBar content={["Lorem", "Lorem", "Lorem"]} />
//       <Main name={name} age={age} course={course} />
//       <RightSideBar content={["Lorem", "Lorem", "Lorem"]} />
//     </div>
//   );
// };

// export default Body;
// -----------------------------------------------------------------------
// export default class Body extends Component {
//   render() {
//     const { name, age, course } = this.props;
//     return (
//       <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//         {/* <p className="student-name">Student name: {this.props.name} </p>
//         <p className="student-age">Student age: {this.props.age} </p>
//         <p className="course"> Course: {this.props.course} </p>
//         <button
//           className={styles.btn}
//           //   style={{
//           //     backgroundColor: "green",
//           //     color: "white",
//           //     borderRadius: "25px",

//           //   }}
//           //   onClick={() => this.setState({ teacher: "Afra" })}
//         >
//           Submit
//         </button> */}

//         <LeftSideBar content={["Lorem", "Lorem", "Lorem"]} />
//         <Main name={name} age={age} course={course} />
//         <RightSideBar content={["Lorem", "Lorem", "Lorem"]} />
//       </div>
//     );
//   }
// }
