import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        className="text-muted text-center fixed-bottom container pt-5 pb-5"
        style={{ fontSize: "1.5em", width: "auto" }}
      >
        <hr />© 2020 Coder Academy Student Project by Nina, Robbie & Ellie
      </footer>
    );
  }
}

export default Footer;
