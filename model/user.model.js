/**
 * Créer ici le model pour user
 * 
 * Un user doit avoir au minimum : un login (unique) et un mot de passe
 */
const {Schema, model} = require('mongoose');

const User = new Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String},
});

module.exports =  model('User',User);