const express = require('express');
const router = express();

let posts = [
    {id : 1, title: 'Post one'},
    {id : 2, title: 'Post two'},
    {id : 3, title: 'Post three'}
];

router.get('/api/post', (req,res) => {
    const limit = parseInt(req.query.limit);

    if(!NaN(limit) && limit > 0){
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
});

router.get('/api/post/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        return res
        .status(400)
        .json({msg : ` A post with ide ${id} was not found`});
    }
    res.status(200).json(post);
});

export default router;
