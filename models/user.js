const {Schema, model} = require('mongoose');
const hashPassword = require('../helpers/hashPassword');

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: [true, 'Please enter email'],
        validate:{
            validator: function (value) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            },
            message: props => `${props.value} is not a valid email`
        }
    },
    password: String
},{
    timestamps: true
})

userSchema.pre('save', function(next){
    this.password = hashPassword.hash(this.password);
    next();
})

const User = model('User', userSchema);

module.exports = User;