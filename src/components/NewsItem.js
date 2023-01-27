import React, { Component } from "react";
import NotFound from "../notfound.jpg";

export default class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { title, description, imageUrl, newsUrl,source } =
      this.props;
    // let date = new Date(publishedAt);
    return (
      <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'80%'}}>
         {source}
        </span>
        <img
          src={imageUrl ? imageUrl : NotFound}
          className="card-img-top"
          alt="..."
          height={"200px"}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {/* <p class="card-text">
            <small class="text-muted">
              {Auther ? " By " + Auther + " & " : "Unknown & "}{" "}
              {publishedAt && date.toGMTString()}
            </small>
          </p> */}
          <a
            href={newsUrl}
            className="btn btn-dark"
            target="_blank"
            rel="noreferrer"
          >
            More details
          </a>
        </div>
      </div>
    );
  }
}
