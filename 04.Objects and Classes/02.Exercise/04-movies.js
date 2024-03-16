function getMoviesInfo(input) {
    const movies = {};

    for (const line of input) {
        if (line.includes("addMovie")) {
            const movieName = line.substring(9);
            movies[movieName] = {};
        } else if (line.includes("directedBy")) {
            const [movieName, director] = line.split(" directedBy ");
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName].director = director;
            }
        } else if (line.includes("onDate")) {
            const [movieName, date] = line.split(" onDate ");
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName].date = date;
            }
        }
    }

    const validMovies = Object.keys(movies).filter(movie =>
        movies[movie].hasOwnProperty("director") &&
        movies[movie].hasOwnProperty("date")
    );

    validMovies.forEach(movie => {
        console.log(JSON.stringify({
            name: movie,
            director: movies[movie].director,
            date: movies[movie].date
        }));
    });
}

getMoviesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])