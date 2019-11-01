const axios = require("axios");
const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
});

class YoutubeController {
    static search (req, res, next) {
        youtube({
            method: "GET",
            url: `/search?key=${process.env.YOUTUBE_API}&part=id&q=review+${req.body.title}`
        })
        .then( (response) => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            next(err);
        });
    }
}

module.exports = YoutubeController;