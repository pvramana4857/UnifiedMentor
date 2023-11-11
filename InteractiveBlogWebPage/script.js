

let moviePosterContainerEl = document.getElementById("moviePosterContainer");

let url = "movieCard.json";
function createMovieCard(movie){
    let {poster, movieTitle, movieContext} = movie;
    let movieCardEl = document.createElement("div");
    movieCardEl.classListadd("col-12" ,"col-md-6" ,"col-lg-3" , "pt-5");
    moviePosterContainerEl.appendChild(movieCardEl);
    let movieCard = document.createElement("div");
    movieCard.classList.add("card");
    movieCard.style="width: 18rem";
    movieCardEl.appendChild(movieCard);
    let posterEl = document.createElement("img");
    console.log(poster);
    posterEl.src=poster;
    movieCard.appendChild(posterEl);
}

fetch(url).then(res => res.json())
.then(data => {
    for(let movie of data){
        createMovieCard(movie);
    }
}).catch((error) =>{
    console.error(error);
})