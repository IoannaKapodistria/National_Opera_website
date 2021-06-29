import React from "react";

function HomeCard(props) {
  return (
    <div className="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0">
      <div className="icon-box mb-4 shadow-sm p-3 mb-5 bg-body rounded">
        <img src={props.src} className="img-responsive" alt="" />
        <p className="h6 mt-1 ms-0 ps-0 text-muted">{props.aithusa}</p>
        <h4 className="title mt-2">
          <a href="">{props.titlos}</a>
        </h4>
        <p className="description h6">{props.sunthetis}</p>
        <p></p>
      </div>
    </div>
  );
}

export default HomeCard;
