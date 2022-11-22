import * as React from "react";

const MovieCard = (props) => {
  const getUrlImage = (path) => {
    return "https://www.themoviedb.org/t/p/w440_and_h660_face" + path;
  };

  return (
    <div className="col-lg-4 col-md-6 p-4">
      <div className="card" sx={{ width: 18 }}>
        <img
          src={getUrlImage(props.image)}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body d-flex justify-content-between">
          <div>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.release_date}</p>
          </div>
          <div>
            <h5 className="card-title">{props.rating}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
