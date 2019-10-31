const User = require('../models/user');
const hashPassword = require('../helpers/hashPassword');
const jwtHandler = require('../helpers/jwtHandler');
const googleMapsClient = require('@google/maps').createClient({
    key: process.env.MAP_API,
    Promise: Promise
  });

class UserController {
    static register(req, res){
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        .then(user=>{
            res.status(201).json({
                msg:"new user successfully created",
                data: user
            })
        })
        .catch(err=>{
            res.status(500).json(err);
        })
    }

    static login(req, res){
        User.findOne({
            email: req.body.email
        })
        .then(user=>{
            if(hashPassword.compare(req.body.password, user.password)){
                let jwtToken = jwtHandler.generateJWT(user.email);
                res.status(200).json(jwtToken);
            }
            else{
                res.status(400).json({
                    msg: 'wrong email for password'
                })
            }
        })
        .catch(err=>{
            res.status(500).json(err);
        })
    }

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

    static getNearbyCinemas(req, res){
        googleMapsClient.findPlace({
            input: 'cinema xxi',
            inputtype: 'textquery',
            fields: ['photos','formatted_address','name','rating','opening_hours','geometry']      
        }).asPromise()
        .then(response=>{
            res.status(200).json(response);
        })
        .catch(err=>{
            res.status(500).json(err);
        })
    }
}

module.exports = UserController;