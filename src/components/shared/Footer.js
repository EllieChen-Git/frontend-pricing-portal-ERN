import React, { Component } from "react";

// TIP: presentational component (a component doesn’t have its own state or 
// doesn't needs to access a lifecycle hook) should be functional components.
// React recommends functional components in this case as they are faster in performance
// use less memory and are easier to write tests for. 
function Footer() {
  return (
    <footer
      className="text-muted text-center fixed-bottom container pt-5 pb-5"
      style={{ fontSize: "1.5em", width: "auto" }}
    >
      <hr />© 2020 Coder Academy Student Project by Nina, Robbie & Ellie
    </footer>
  );
}

export default Footer;
