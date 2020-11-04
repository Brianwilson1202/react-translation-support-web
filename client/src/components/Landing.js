import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slider.css";
import SearchBar from "./SearchBar";
import MenuCard from "./MenuCard";
import * as actions from "../actions/types";
import { connect } from "react-redux";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <MenuCard title="TRANSLATE" link="/translate" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Landing);
