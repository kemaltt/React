import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Main = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (term == "hasan") {
      navigate("/contact");
    } else {
      alert("wrong name");
    }
    setTerm("");
  };

  return (
    <div>
      <h1>Main</h1>
      {/* <Link to="/about-us"> Go to AboutUs</Link> <br />
      <Link to="/contact"> Go to Contact</Link> */}

      {/* <NavLink to="/about-us"> Go to AboutUs</NavLink> <br />
      <NavLink to="/contact"> Go to Contact</NavLink> */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Main;

// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// const Main = () => {

//     const navigate = useNavigate()
//     const [ term, setTerm ] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if(term == 'hasan'){
//             navigate('/contact');
//         }else{
//             alert('Wrong name!')
//         }
//         setTerm('')
//     }

//     return (
//         <div>
//             <h1>Main</h1>
//             {/* <Link to='/contact'>Go to Contact</Link>
//             <br/>
//             <Link to='about-us'>Go to About Us</Link> */}
//             {/* <NavLink to='/contact'>Go to Contact</NavLink>
//             <br/>
//             <NavLink to='about-us'>Go to About Us</NavLink> */}
//             <form onSubmit={handleSubmit}>
//                 <input
//                 type='text'
//                 value={term}
//                 onChange={(e) => setTerm(e.target.value)}
//                 />
//                 <input
//                 type='submit'
//                 value='submit'
//                 />
//             </form>
//         </div>

//     )
// }

// export default Main;
