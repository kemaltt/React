import React from "react";
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
import SearchBar from "./component/SearchBar";
import ImageList from "./component/ImageList";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./component/Router/Contact";
import AboutUs from "./component/Router/AboutUs";
import Mainn from "./component/Router/Mainn";
import UserInfo from "./component/Router/UserInfo";

// react Router 6----------------------------------------------------------

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/user-info/:id" element={<UserInfo />} />
      </Routes>
    </Router>
  );
}

// // onSubmit -----Search-----------------------------------------------------------
// export default class App extends Component {
//   state = {
//     images: [],
//   };
//   handleFormSubmit = async (term) => {
//     const response = await axios.get("https://api.unsplash.com/search/photos", {
//       params: { query: term },
//       headers: {
//         Authorization: "Client-ID GBN-Lo3fx8kNU0nN4N2yL_cmI-DpPyc-zAlqXkLoNzw",
//       },
//     });
//     console.log(response);
//     this.setState({ images: response.data.results });
//   };

//   render() {
//     return (
//       <div>
//         <SearchBar handleFormSubmit={this.handleFormSubmit} />
//         <ImageList images={this.state.images} />
//       </div>
//     );
//   }
// }
// React Events---onClick--onSubmit------------------------------------
// export default class App extends Component {
//   state = {
//     value: "",
//   };
//   // handleClick = () => {
//   //   console.log("clicked");
//   // };

//   handleChange = () => {
//     console.log("changed");
//   };

//   handleInputChange = (e) => {
//     console.log(e.target);
//     this.setState({ value: e.target.value });
//   };

//   render() {
//     return (
//       <div className="input-card">
//         <form action="">
//           <label htmlFor="">Enter a search</label> <br />
//           {/* <input onClick={this.handleClick} type="text" /> */}
//           {/* <input onChange={this.handleChange} type="text" /> */}
//           {/* <input onChange={(e) => console.log(e.target.value)} type="text" /> */}
//           {/* <input
//             onChange={this.handleInputChange}
//             type="text"
//             value={this.state.value}
//           /> */}
//           <input
//             onChange={this.handleInputChange}
//             type="password"
//             value={this.state.value}
//           />
//         </form>
//         {/* <h1>Value :{this.state.value}</h1> */}
//         {/* {this.state.value.length <= 4 ? (
//           <h1>Password must be longer than 4 characters</h1>
//         ) : null} */}
//         {this.state.value.length <= 4 && (
//           <h1>Password must be longer than 4 characters</h1>
//         )}
//       </div>
//     );
//   }
// }

// -----------------location-----------------------------
// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       latitude: "",
//       message: "",
//     };
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setTimeout(() => {
//           this.setState({ latitude: position.coords.latitude });
//         }, 1000);
//       },
//       (error) => {
//         setTimeout(() => {
//           this.setState({ message: error.message });
//         }, 1000);
//       }
//     );
//   }

//   render() {
//     if (this.state.latitude && !this.state.message)
//       return <h1>Latitude : {this.state.latitude}</h1>;

//     if (!this.state.latitude && this.state.message)
//       return <h1>Error : {this.state.message} </h1>;

//     return <h1>Loading.... </h1>;
//   }
// }

// react und Components Life cycle-----------------------------------------------------------------
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Orhan",
//       age: 9,
//       course: "react",
//       number: 5001,
//     };

//     console.log("constructor");
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }

//   changeNumber = () => {
//     this.setState({ no: this.state.number + 1 });
//   };

//   render() {
//     console.log("render");
//     return (
//       <>
//         App
//         <br />
//         number: {this.state.number}
//         <br />
//         <button onClick={this.changeNumber}>Change number</button>
//       </>
//     );
//   }
// }

// --------------------CSS styling-------------------------------------------------
// export default class App extends Component {
//   state = {
//     name: "Orhan",
//     age: 9,
//     course: "react",
//     no: "5001",
//     school: "DomLis",
//     teacher: "Hasan",
//     title: " Welcome to Main Page",
//   };

//   render() {
//     return (
//       <>
//         <Header content={["Home", "About", "Contact"]} />
//         <Body
//           name={this.state.name}
//           age={this.state.age}
//           course={this.state.course}
//         />
//         <Footer platform="Amazon" phone="Iphone" beverage="Tea" />
//       </>
//     );
//   }
// }
// --------------------CSS styling-------------------------------------------------
// export default class App extends Component {
//   state = {
//     name: "Orhan",
//     age: 9,
//     course: "react",
//     no: "5001",
//     school: "DomLis",
//     teacher: "Hasan",
//     title: " Welcome to Main Page",
//   };

//   render() {
//     return (
//       <>
//         <Header headerTitle={this.state.title} />
//         <Body
//           name={this.state.name}
//           age={this.state.age}
//           course={this.state.course}
//         />
//         <Footer />
//       </>
//     );
//   }
// }
// ----------------------------------------------------------------------------------------------

// Function React------------------------------------------------------------------------

// const App = () => {

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="card-group w-100">
//             <div className="col">
//               <Collapse href="collapseExample1">
//                 <Card
//                   cardTitle={this.state.title1}
//                   cardText={this.state.text1}
//                   cardImg={this.state.img1}
//                 />
//               </Collapse>
//             </div>
//             <div className="col">
//               <Collapse href="collapseExample2">
//                 <Card
//                   cardTitle={this.state.title2}
//                   cardText={this.state.text2}
//                   cardImg={this.state.img2}
//                 />
//               </Collapse>
//             </div>

//             <div className="col">
//               <Collapse href="collapseExample3">
//                 <Card
//                   cardTitle={this.state.title3}
//                   cardText={this.state.text3}
//                   cardImg={this.state.img3}
//                 />
//               </Collapse>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

// // Class Component-----------------------------------------------------------------------------------
// export default class App extends Component {
//   state = {
//     title1: "HTML",
//     title2: "CSS",
//     title3: "REACT",
//     text1: "Lorem Ipsum Text 1",
//     text2: "Lorem Ipsum Text 2",
//     text3: "Lorem Ipsum Text 3",
//     img1: "https://picsum.photos/id/1/200/300",
//     img2: "https://picsum.photos/id/2/200/300",
//     img3: "https://picsum.photos/id/3/200/300",
//   };

//   render() {
//     console.log(this.state);
//     return (
//       <>
//         <div className="container">
//           <div className="row">
//             <div className="card-group w-100">
//               <div className="col">
//                 <Collapse href="collapseExample1">
//                   <Card
//                     cardTitle={this.state.title1}
//                     cardText={this.state.text1}
//                     cardImg={this.state.img1}
//                   />
//                 </Collapse>
//               </div>
//               <div className="col">
//                 <Collapse href="collapseExample2">
//                   <Card
//                     cardTitle={this.state.title2}
//                     cardText={this.state.text2}
//                     cardImg={this.state.img2}
//                   />
//                 </Collapse>
//               </div>

//               <div className="col">
//                 <Collapse href="collapseExample3">
//                   <Card
//                     cardTitle={this.state.title3}
//                     cardText={this.state.text3}
//                     cardImg={this.state.img3}
//                   />
//                 </Collapse>
//               </div>
//             </div>
//           </div>
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
