const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cinemativ8", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}, function (err) {
    if (err)    console.log("Failed to connect database.");
    else    console.log("Success to connect database.");
});

module.exports = mongoose;