import React from "react";
import { connect } from "react-redux";
import { fetchRequests } from "../actions";
import LoadingSpinner from "./LoadingSpinner";
import { Line } from "rc-progress";

class TranslationList extends React.Component {
  componentDidMount() {
    this.props.fetchRequests();
  }
  //calculate remaining day by subtracting requested date and current date
  calcDate = (date) => {
    const today = new Date().toISOString();
    const due = new Date(date);
    const now = new Date(today);
    const remaining = Math.ceil((due - now) / (1000 * 60 * 60 * 24));

    return remaining;
  };
  //calculate percentage to show approximately how much day is remaining
  calcPercent = (day) => {
    const MAX_VALUE = 30;
    const perc = (day / MAX_VALUE) * 100;

    return perc;
  };

  updateColor = (day) => {
    const remaining = this.calcDate(day);
    console.log(remaining);
    if (remaining === 1) {
      return "#a00006e0";
    } else if (remaining >= 2 && remaining <= 3) {
      return "#d8676b";
    } else if (remaining >= 4 && remaining <= 7) {
      return "#efaaac";
    } else if (remaining >= 8 && remaining <= 14) {
      return "#e2e4c4";
    } else if (remaining >= 15 && remaining <= 30) {
      return "#6dcf9d8a";
    }
  };

  renderRequests() {
    return this.props.trans.data.map((req, i) => {
      return (
        <div key={i} className="collection col s12">
          <div className="card-content">
            <span className="card-title">{req.title}</span>
            <div className="answer">
              0<span> ans</span>
            </div>
          </div>
          <div className="tag-title">casual</div>
          <div className="tag-title">fan-letter</div>
          <div className="tag-title">formal</div>

          <Line
            percent={this.calcPercent(this.calcDate(req.completeIn))}
            strokeWidth="1"
            strokeColor={this.updateColor(req.completeIn)}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="list-render">
        {this.props.trans.loading ? (
          <LoadingSpinner />
        ) : (
          <div className="row">
            <div className="filter">
              <span>ENG</span> <span>KOR</span> <span>SPN</span>{" "}
              <span>CHN</span> <span>JAP</span>
            </div>
            <div className="img-container">
              <img src="images/day_scheme.png" alt="day_remaining" />
            </div>
            {this.renderRequests()}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ trans }) {
  return { trans };
}

export default connect(mapStateToProps, { fetchRequests })(TranslationList);
