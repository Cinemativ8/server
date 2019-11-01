const axios = require("axios");
const trakt = axios.create({
    baseURL: "https://api.trakt.tv",
    headers: {
        "Content-type" : "application/json",
        "trakt-api-key": process.env.TRAKT_CLIENT_ID,
        "trakt-api-version": "2",
        "Authorization": process.env.Authorization
    }
});

// const TraktTV = require("trakt.tv");
// const traktTV = new TraktTV({
//     client_id: process.env.TRAKT_CLIENT_ID,
//     client_secret: process.env.TRAKT_CLIENT_SECRET,
//     plugins: {
//         images: require("trakt.tv-images")
//     },
//     options: {
//         images: {
//             smallerImages: true,
//             cached: true
//         }
//     }
// }, true);

class MovieController {
    static trending (req, res, next) {
        trakt({
            method: "GET",
            url: `/movies/trending`
        })
        .then( (response) => {
            // console.log(response.data[0].movie.ids.tmdb);
            // console.log(response.data[0].movie.ids.imdb);
            // traktTV.images.get({
            //     tmdb: response.data[0].movie.ids.tmdb,      // optional, recommended
            //     imdb: response.data[0].movie.ids.imdb,     // starts with 'tt' prefix, recommended
            //     type: "movie"                       // can be 'movie', 'show' or 'episode', person
            // })
            // .then(console.log)
            // .catch(console.log);

            res.status(200).json(response.data);
        })
        .catch((err) => {
            next(err);
        });
    }
    static popular (req, res, next) {
        trakt({
            method: "GET",
            url: `/movies/popular`
        })
        .then( (response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            next(err);
        });
    }
    static mostplayed (req, res, next) {
        trakt({
            method: "GET",
            url: `/movies/played/monthly`
        })
        .then( (response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            next(err);
        });
    }
    static boxoffice (req, res, next) {
        trakt({
            method: "GET",
            url: `/movies/boxoffice`
        })
        .then( (response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            next(err);
        });
    }
    static detail (req, res, next) {
        trakt({
            method: "GET",
            url: `/movies/${req.params.id}?extended=full`
        })
        .then( (response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            next(err);
        });
    }
    static stats (req, res, next) {
        trakt({
            method: "GET",
            url: `/movies/${req.params.id}/stats`
        })
        .then( (response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            next(err);
        });
    }
    static rating (req, res, next) {
        trakt({
            method: "GET",
            url: `/movies/${req.params.id}/ratings`
        })
        .then( (response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            next(err);
        });
    }
    static related (req, res, next) {
        trakt({
            method: "GET",
            url: `/movies/${req.params.id}/related`
        })
        .then( (response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            next(err);
        });
    }
    static search (req, res, next) {
        trakt({
            method: "GET",
            url: `/search/movie?query=${req.body.search}`
        })
        .then( (response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            next(err);
        });
    }
}

module.exports = MovieController;