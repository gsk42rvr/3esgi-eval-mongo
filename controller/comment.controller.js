const Comment = require("./../model/comment.model.js");

/**
 * Méthode pour créer un nouveau commentaire
 * @body
 * {
 *     message: <string>,
 *     userId: <string>,
 *     postId: <string>
 * }
 */
exports.create = async (req, res) => {
    try{
        let newComment = {
            ...req.body,
        }
        let comment = await Comment.create(newComment);
        res.status(201).json(comment);
    }catch(e){
        res.status(500).json(e.message);
    }
}

/**
 * Méthode pour modifier un commentaire
 * @param id l'id du commentaire à modifier
 * @body
 * {
 *     message: <string>,
 * }
 */
exports.update = async (req, res) => {
    try{
        const updateComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if (!updateComment) return res.status(404).json({ message: "commentaire non mis à jour"});
        res.status(200).json({message: "Commentaire mis à jour"});
    }catch(e){
        res.status(500).json(e.message);
    }
}

/**
 * Méthode pour supprimer un commentaire
 * @param id l'id du commentaire à supprimer
 */
exports.delete = async (req, res) => {
    try{
        let id = req.params.id;
        let result = await Comment.findByIdAndDelete(id);
        if (result){
            res.status(200).json({message: "Commentaire supprimé"});
        }
    }catch(e){
        res.status(500).json(e.message);
    }
}