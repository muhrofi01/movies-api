import * as React from "react";
const MovieWrapper = (props) => {
  return (
    <div className="container">
      <div className="row">{props.children}</div>
    </div>
  );
};

export default MovieWrapper;
