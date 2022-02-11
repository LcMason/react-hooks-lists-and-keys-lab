import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
     <nav>
        {links.map((link, index)=> <a key={index} href={`#${link}`}> {link} </a>) }
        {/* {links.map(link => { 
          link = link+"!"
          return <a href={`#${link}`}> {link} </a>
        }) } */}
        {/* {[<a href="#home">home</a>, <a href="#about">about</a>, <a href="#projects">projects</a>]} */}
     </nav>
  )      
// <a key={somethingForYouToFigureOut} href={somethingForYouToFigureOut}>{link}</a>
  
}

export default NavBar;
