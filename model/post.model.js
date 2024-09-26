/**
 * Créer ici le model pour post
 * 
 * Un post doit avoir au minimum : un message, une date, un userId (auteur du post)
 */

const mongoose = require("mongoose")


const postSchema = mongoose.Schema({
    userId : {
        type: mongoose.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    message :{
        type : String,
        required: false,
    }
},{
    timestamps: true
    }
)

module.exports = mongoose.model('Post', postSchema)