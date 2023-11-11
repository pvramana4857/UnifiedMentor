

let moviePosterContainerEl = document.getElementById("moviePosterContainer");

let url = "movieCard.json";
function createMovieCard(movie){
    let {poster, movieTitle, movieContext} = movie;

    let movieCardEl = document.createElement("div");
    movieCardEl.classList.add("col-12" ,"col-md-6" ,"col-lg-3" , "pt-5");
    moviePosterContainerEl.appendChild(movieCardEl);


    let movieCard = document.createElement("div");
    movieCard.classList.add("card");
    movieCard.style="width: 18rem";
    movieCardEl.appendChild(movieCard);


    let posterEl = document.createElement("img");
    console.log(poster);
    posterEl.src=poster;
    movieCard.appendChild(posterEl);


    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    movieCard.appendChild(cardBody);


    let movieTitleEl = document.createElement("h5");
    movieTitleEl.classList.add("card-title");
    movieTitleEl.textContent= movieTitle;
    cardBody.appendChild(movieTitleEl);


    let movieText = document.createElement("p");
    movieText.classList.add("card-text");
    movieText.textContent=movieContext;
    cardBody.appendChild(movieText);


    let watchNowBtn = document.createElement("a");
    watchNowBtn.classList.add("btn", "btn-primary");
    watchNowBtn.textContent="Watch Now"
    cardBody.appendChild(watchNowBtn);

}


fetch(url).then(res => res.json())
.then(data => {
    for(let movie of data){
        createMovieCard(movie);
    }
});