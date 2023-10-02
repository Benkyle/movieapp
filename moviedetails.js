const img_url = "https://image.tmdb.org/t/p/w500";
const getMovieDetails = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieIdQuery = urlParams.get("movieId");
  // get all genre from api
  const url = `https://api.themoviedb.org/3/movie/${movieIdQuery}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjZmYzA2ZmRlYTg0ZjAwN2UyZTc1M2FjNGZhOGI5ZCIsInN1YiI6IjY1MDFmNjdiZTBjYTdmMDBjYmViMWMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cJKBxFmvEY1mKqmbPh9ykKXgvWgeugb5A0R39WXWuqI",
    },
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      //   const details = json.genres;
      console.log(json);

      const { title, poster_path, overview, release_date, revenue,  runtime } = json;
      const movieImg = document.querySelector("#detail");
      const img = document.createElement("img");
      img.src = img_url + poster_path;
      img.classList.add("details");
      movieImg.appendChild(img);

      const movieDetails = document.createElement("div");
      movieDetails.classList.add("moviedetail");
      const movieDate = document.createElement("h3");
      const movieTitle = document.createElement("h1");
      const movieOverview = document.createElement("h2");
      const movieRuntime = document.createElement("h3");
      const movieRevenue = document.createElement("span");

      movieRevenue.innerText = `Evaluation:$${revenue.toLocaleString()}`;
      movieDate.innerText = `Release date: ${release_date}`;
      movieOverview.innerText = `Overview: ${overview}`;
      movieTitle.innerText = `Title:${title}`;
      movieRuntime.innerText = `Runtime: ${runtime} Minutes`;
      movieDetails.appendChild(movieTitle);
      movieDetails.appendChild(movieOverview);
      movieDetails.appendChild(movieRuntime);
      movieDetails.appendChild(movieDate);
      movieDetails.appendChild(movieRevenue);

      movieImg.appendChild(movieDetails);
    })
    .catch((err) => console.error("error:" + err));
};

getMovieDetails();
