// http://www.omdbapi.com/?apikey=[yourkey]&
const movieListEl = document.querySelector('.movie__list--container')

async function renderMovies(filter){

    const movieInfo = document.getElementById("movieSearch").value
    const response = await fetch(`http://www.omdbapi.com/?apikey=47ba40f4&s=${movieInfo}`)
    const movieData = await response.json()
    if ( filter === 'RECENT_TO_OLD'){
        movieData.Search.sort((a, b) => b.Year - a.Year)
    }  
    if (filter === 'OLD_TO_RECENT'){
        movieData.Search.sort((a, b) => a.Year - b.Year)
    }

    movieListEl.innerHTML = movieData.Search.slice(0,6).map((movie) => movieHTML(movie)).join("")

}

function filterMovies(event){
    renderMovies(event.target.value)
}


function movieHTML(movie){
    return `<div class="movie__container">
    <figure class="movie__image--container">
      <img class="movie__image" src="${movie.Poster}" alt="" />
    </figure>
    <div class="movie__description--wrapper">
      <h4>Title: ${movie.Title}</h4>
      <h4>Year : ${movie.Year}</h4>
      <h4>Runtime : 02:47:38 </h4>
    </div>
    <button class="movie__button hover">
      <a class="movie__anchor--button" href="#">Play movie</a>
    </button>
  </div>`
}
