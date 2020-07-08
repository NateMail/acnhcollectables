import React from "react";
import loadingGif from "../Photos/loading.gif";
import "./stylingComponents/loading.css";

function Loading(props) {
  if (props.loading) {
    return (
      <div className="loading">
        <img src={loadingGif} alt="loading" />
      </div>
    );
  }
}

export default Loading;
