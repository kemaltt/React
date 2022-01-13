import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Example1 from "./component/Example1";
import Example2 from "./component/Example2";
import Example3 from "./component/Example3";
import Student from "./component/Student";
import Teacher from "./component/Teacher";
import Card from "./component/Card";
import Collapse from "./component/Collapse";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

export default class App extends Component {
  state = {
    name: "Orhan",
    age: 9,
    course: "react",
    no: "5001",
    school: "DomLis",
    teacher: "Hasan",
  };

  render() {
    return (
      <>
        <Header title=" Welcome to Main Page" />
        <Body
          name={this.state.name}
          age={this.state.age}
          course={this.state.course}
        />
        <Footer />
      </>
    );
  }
}

// export default class App extends Component {
//   state = {
//     title1: "HTML",
//     title2: "CSS",
//     title3: "React",
//     text1: "Lorem Ipsum Text 1",
//     text2: "Lorem Ipsum Text 2",
//     text3: "Lorem Ipsum Text 3",
//     img1: "https://picsum.photos/id/1/200/300",
//     img2: "https://picsum.photos/id/10/200/300",
//     img3: "https://picsum.photos/id/100/200/300",
//   };

//   render() {
//     console.log(this.state);
//     return (
//       <>
//         <div className="card-group">
//           <Collapse href="collapseExample1">
//             <Card
//               cardTitle={this.state.title1}
//               cardText={this.state.text1}
//               cardImg={this.state.img1}
//             />
//           </Collapse>
//           <Collapse href="collapseExample2">
//             <Card
//               cardTitle={this.state.title2}
//               cardText={this.state.text2}
//               cardImg={this.state.img2}
//             />
//           </Collapse>
//           <Collapse href="collapseExample3">
//             <Card
//               cardTitle={this.state.title3}
//               cardText={this.state.text3}
//               cardImg={this.state.img3}
//             />
//           </Collapse>
//         </div>
//       </>
//     );
//   }
// }
// ------------------------------------------------------------------------------------------------------------
// export default class App extends Component {
//   state = {
//     name: "Orhan",
//     age: 9,
//     course: "react",
//     no: "5001",
//     school: "DomLis",
//     teacher: "Hasan",
//   };

//   render() {
//     return (
//       <>
//         <Student studentNo={this.state.no} school={this.state.school} />{" "}
//         <Teacher teacher={this.state.teacher} />{" "}
//         <button
//           style={{
//             backgroundColor: "green",
//             color: "white",
//             borderRadius: "25px",
//           }}
//           onClick={() => this.setState({ teacher: "Afra" })}
//         >
//           change teacher
//         </button>
//         <br />
//         <button
//           style={{
//             backgroundColor: "blue",
//             color: "white",
//             borderRadius: "25px",
//           }}
//           onClick={() =>
//             this.setState({ no: Math.floor(Math.random() * 1000) })
//           }
//         >
//           change no{" "}
//         </button>{" "}
//       </>
//     );
//   }
// }
// ----------------------------------------------------------------------------------------------------------------------
// export default class App extends Component {
//   state = {
//     name: "Orhan",
//     age: 9,
//     course: "react",
//   };

//   render() {
//     console.log(this.state);
//     return (
//       <>
//         <p>{this.state.name} </p>
//         <button onClick={() => this.setState({ name: "Kemal" })}>
//           change name
//         </button>
//       </>
//     );
//   }
// }
// --------------------------------------------------------------------------------------------------------------------
// export default class App extends Component {
//   state = {
//     count: 0,
//     name: "hasan",
//     oppucation: "developer",
//   };

//   render() {
//     return (
//       <>
//         <p> {this.state.name} </p>
//         <p> {this.state.oppucation} </p>
//         <p> {this.state.count} </p>
//       </>
//     );
//   }
// }

// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <Example1 />
//         <Example2 />
//         <Example3 />
//       </>
//     );
//   }
// }
// ---------------------------------------------------------------------------------------------------------------
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
