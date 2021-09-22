const Post = require("../models/postModel");
const { getFromCache } = require("../helpers/redis");

exports.getAllPosts = async (req, res, next) => {
    const posts = await getFromCache("posts", async () => {
        try{
            const posts = await Post.find();
            return posts;
        }catch(error){
            res.status(500).json({
                title: "internal error"
            });
            return;
        }
    });
    res.status(200).json({
        data: posts
    });
}
exports.getOnePost = async (req, res, next) => {
    const id = req.params.id;
    await Post.findById(id)
            .then(response => {
                res.status(200).json({
                    data: response
                });
            })
            .catch(error => {
                res.status(404).json({
                    title: "Post not found"
                })
            });
}

exports.createPost = async (req, res, next) => {
    const body = req.body;
    await Post.create(body)
            .then(response => {
                res.status(200).json({
                    data: response
                });
            })
            .catch(error => {
                res.status(400).json({
                    title: "Error in inserting"
                })
            });
}
exports.updatePost = async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    await Post.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true
    })
            .then(response => {
                res.status(200).json({
                    data: response
                });
            })
            .catch(error => {
                res.status(400).json({
                    title: "Error in inserting"
                })
            });
}
exports.deletePost = async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    await Post.findByIdAndDelete(id, body)
            .then(response => {
                res.status(200).json({
                    status: "success"
                });
            })
            .catch(error => {
                res.status(400).json({
                    title: "Error in inserting"
                })
            });
}