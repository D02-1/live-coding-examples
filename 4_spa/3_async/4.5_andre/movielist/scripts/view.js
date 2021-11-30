export default class View {
    constructor() {
        this.moviesSection = document.querySelector(".movies");
    }
    displayMovieOnPage(data) {
        if (data.Response === "False") {
            alert("Sorry, we can't find this movie!");
        } else {
            this.moviesSection.insertAdjacentHTML("beforeend",
            `<section class="movie-display"> 
                <section class="movie-meta">
                    <h2>${data.Title}</h2>
                    <p>Release date: ${data.Released}</p>
                    <p>Run time: ${data.Runtime}</p>
                    <p>Rated: ${data.Rated}</p>
                </section>
                <p>${data.Plot}</p>
            </section>`)
        }
    }
    removeDisplay() {
        this.moviesSection.innerHTML = "";
    }

}