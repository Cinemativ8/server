const axios = require("axios");
const omdb = axios.create({
    baseURL: "http://www.omdbapi.com",
});

class OmdbController {
    static search (req, res, next) {
        omdb({
            method: "GET",
            url: `/?i=${req.body.imdb}&apikey=${process.env.OMDB_API}`
        })
        .then( (response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            next(err);
        });
    }
}

module.exports = OmdbController;