import React from "react";

const Description = ({ movies }) => {
  console.log(movies);

  const formSubmit = () => {
    document.getElementById("movie-form").style.display = "block";
  };

  return (
    <>
      <div className="short-description">
        <img src={movies[0].show.image.medium} alt="" />
        <p> {movies[0].show.summary} </p>
      </div>
      <div className="button">
        <button className="btn" onClick={formSubmit}>
          Book Tickets
        </button>
      </div>

      <form action="" className="forms" id="movie-form">
        <div className="email">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>

        <div className="password">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
      </form>
    </>
  );
};

export default Description;
