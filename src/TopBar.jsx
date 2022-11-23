import * as React from "react";

const TopBar = (props) => {
  const inputSearchHandler = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <div className="d-flex justify-content-between align-items-center my-5">
      <h2 className="fs-1 fw-bolder">SkilMovie</h2>
      <div>
        <input
          className="form-control"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={inputSearchHandler}
        />
      </div>
    </div>
  );
};

export default TopBar;
