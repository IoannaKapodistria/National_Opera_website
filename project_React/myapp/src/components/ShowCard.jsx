import React from "react";

function ShowCard(props) {
  return (
    <div className="card">
          <img src={props.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title3">{props.title}</h5>
            <p className="role-name2">{props.sinthesi} <span className="role"> Σύνθεση
              </span></p>
            <p className="role-name2">{props.libreto} <span className="role">Λιμπρέτο</span> </p>
            <p className="production">{props.paragogi}</p>
            <a href={props.link1} className="card-link">Διαβάστε περισσότερα</a>
          </div>
        </div>
  );
}

export default ShowCard;
