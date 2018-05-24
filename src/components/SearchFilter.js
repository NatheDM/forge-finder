import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  filterDwarves: color =>
    dispatch({
      type: "FILTER_COLOR",
      payload: color
    })
});

const SearchFilter = ({ filterDwarves }) => {
  return (
    <div>
      <button
        onClick={() => {
          filterDwarves("yellow");
        }}
      >
        Yellow Beards Only
      </button>
      <button
        onClick={() => {
          filterDwarves("");
        }}
      >
        All Beards
      </button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(SearchFilter);
