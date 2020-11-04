import React from "react";
import { Link } from "react-router-dom";

const MenuCard = (props) => {
  return (
    <div className="col s12 m4">
      <div className="card horizontal">
        <div className="card-stacked">
          <Link to={props.link} className="menucard-content">
            <p>{props.title}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
