import React, { Component } from "react";

export default class Model extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-dark"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
          style={{
            position: "fixed",
            top: "60px",
            right:"0",
            zIndex: "99999"
          }}
        >
          #Get in touch
        </button>

        <div
          className="modal fade bd-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" style={{height:'100%'}}>
            <div className="modal-content" style={{height:'100%'}}>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <div className="embed-responsive embed-responsive-16by9">
               <iframe style={{height:'377%'}} className="iframe embed-responsive-item" src="https://info08.github.io/my-portfolio/" title="description" ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
