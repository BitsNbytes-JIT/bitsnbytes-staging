/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// core components
import IndexNavbar from "../components/Navbar"


export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  },[]);
  return (
    <>
      <div className="wrapper">
        <div className="main">
          <IndexNavbar></IndexNavbar>
        <header className="App-header">
        <p>
          Welcome to BitsNbytes! 
        </p>
        <a
          className="App-link"
          href="https://forms.gle/Ciu5T7j3QKz56CE58"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register here
        </a>
      </header>
          </div>
      </div>
    </>
  );
}
