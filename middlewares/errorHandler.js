function errorHandler (err, req, res, next) {
    console.error(err.stack);
    
    const status = err.status || 500;
    const message = err.message || `Internal Server Error.`;

    switch (err.name) {
        case "ValidationError" :
            let messages = [];
            for (let em in err.errors) {
                messages.push(err.errors[em].message);
            }
            console.log(messages);
            res.status(400).json({ "messages" : messages });
            break;
        default :
            // res.status(500).json({ err });
            res.status(status).json({ "message" : message });
            break;
    }
}

module.exports = errorHandler;