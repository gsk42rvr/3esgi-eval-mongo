const { Query } = require("mongoose");
const User = require("./../model/user.model");
const bcrypt = require("bcrypt");
const user = await users.findOne( {"userData.username": username} );
/**
 * Methode pour la connexion utilisateur
 * @body
 * {
 *     email: <string>,
 *     password: <string>
 * }
 */
exports.login = async (req,res) => {
    try{
        //TODO
        let result = await users.findOne(req.params.id)
        if(result == null) {
            res.status(404).send("user not found")
        }
        else {
            let result = await this.login.findById(req.params.id)
            if(result == null) {
                res.status(404).send("wrong password")
            }
            else {
                res.status(200).json(User);
            }
        }
    }catch(e){
        res.status(500).json(e.message);
    }
}

/**
 * Méthode pour la création d'un compte utilisateur
 * @body
 * {
 *     email: <string>,
 *     password: <string>,
 *     username: <string>
 * }
 */
exports.signin= async (req,res) => {
    try{
        let newUser = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password,10)
        }
        let user = await User.create(newUser);
        res.status(200).json(User);
    }catch(e){
        res.status(500).json(e.message);
    }
}
