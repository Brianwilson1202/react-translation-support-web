import React from "react";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser"; // to render html tags
import { withRouter } from "react-router-dom"; // get access to history obbject's properties
import * as actions from "../../actions";

const TranslateReview = ({
  onCancel,
  formValues,
  submitRequest,
  history,
  tempData,
  languageData,
  tagsData,
}) => {
  return (
    <div>
      <h2>Confirm Entries</h2>
      <div className="confirm-block section">
        <h3> Title </h3>
        <p>{formValues.title}</p>
        <div className="divider" />
      </div>

      <div className="confirm-block section">
        <h3> Temp Data </h3>
        <p>{tempData.toString()}</p>
        <div className="divider" />
      </div>

      <div className="row">
        <div className="confirm-block section col s12 m4 l4">
          <h3> Language </h3>
          <p>{languageData.toString()}</p>
          <div className="divider" />
        </div>

        <div className="confirm-block section col s12 m4 l4">
          <h3>Complete By</h3>
          <p>{formValues.completeIn}</p>
          <div className="divider" />
        </div>

        <div className="confirm-block section col s12 m4 l4">
          <h3>Tags</h3>
          <p>{tagsData.toString()}</p>
          <div className="divider" />
        </div>
      </div>

      <div className="confirm-block section">
        <h3>Body</h3>
        <p>{ReactHtmlParser(formValues.body)}</p>
        <div className="divider" />
      </div>

      <button
        className="darken-3 btn-flat right"
        onClick={() => submitRequest(formValues, history)}
      >
        Submit
      </button>
      <button className="darken-3 btn-flat right" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.translateForm.values,
    tempData: state.trans.tempData,
    languageData: state.trans.languageData,
    tagsData: state.trans.tagsData,
  };
}

export default connect(mapStateToProps, actions)(withRouter(TranslateReview));
