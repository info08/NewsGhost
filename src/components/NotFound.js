import React, { Component } from "react";
import Navbar from "./Navbar";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <Navbar />
        <h1 className="text-center my-3">Page Not Found</h1>
      </>
    );
  }
}
