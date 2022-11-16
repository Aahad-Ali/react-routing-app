// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route,Link  } from "react-router-dom";

import Home from "./components./home";
import Gallery from "./components./gallery";
import About from "./components./about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <link to={`/`}>Home</link>
          </li>
          <li>
            <link to={`gallery`}>Gallery</link>
          </li>
          <li>
            <link to={`about`}>About</link>
          </li>
        </ul>
      </nav>

      <RouterProvider router={router} />



      {/* // const [page, setPage] = useState("home"); */}

      {/* // <button onClick={()=>{setPage("home")  }}></button>
  // <button onClick={()=>{setPage("gallery")  }}></button>
  // <button onClick={()=>{setPage("about")  }}></button>

  //   {(page === 'home' ) ? <Home /> : null}
  //   {(page === 'Gallery' ) ? <Gallery /> : null}
  //   {(page === 'About' ) ? <About /> : null} */}
    </div>
  );
}

export default App;
