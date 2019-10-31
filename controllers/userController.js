const User = require('../models/user');
const hashPassword = require('../helpers/hashPassword');
const jwtHandler = require('../helpers/jwtHandler');

class UserController {
    static googleLogin(req, res){
        User.findOne({
            email: req.user.email
        })
        .then(user=>{
            if(user){
                return user;
            }
            else{
                return User.create({
                    name: req.user.name,
                    email: req.user.email,
                    password: hashPassword.hash(process.env.DEFAULT_PASSWORD)
                })
            }
        })
        .then(user=>{
            let jwtToken = jwtHandler.generateJWT(user.email);
            res.status(200).json(jwtToken);
        })
        .catch(err=>{
            res.status(500).json(err);
        })
    }
}

module.exports = UserController;