import logo from './logo.svg';
import './App.css';
import Exercises from './exercises';
import HelloWorld from './exercises/e5/hello-world';
import Assignment from './tuiter/assignment';
import Challenge from './tuiter/challenge.js';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Assignment/> 

      </div>
    </BrowserRouter>
  );
}

export default App;

// Challenge
// function App() {
//   return (
//       <BrowserRouter>
//       <div className="container">
//           {/*<HelloWorld/>*/}
//           {/*<Labs/>*/}
//           {/*<Tuiter/>*/}
//           <Routes>
//               <Route index
//                      element={<Exercises/>}/>
//               <Route path="/hello"
//                      element={<HelloWorld/>}/>
//               <Route path="/tuiter/*"
//                      element={<Challenge/>}/>
//           </Routes>
//       </div>
//       </BrowserRouter>
//           );
// }
// export default App;
