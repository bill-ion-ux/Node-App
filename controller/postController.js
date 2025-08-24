let posts = [
    {id : 1, title: 'Post one'},
    {id : 2, title: 'Post two'},
    {id : 3, title: 'Post three'},
];



// @desc Get a single Posts
// @route GET/ api/posts/:id
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }
    res.status(200).json(post);
}

// @desc Get all post
// @route  GET /api/posts
export const getPosts = (req,res) => {
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0){
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error)
    }
    res.status(200).json(posts);
}

// @desc Create new post
// @route  POST /api/posts

export const createPost = (req, res, next) => {
    console.log(req.body);
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };
    if(!newPost.title){
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }
    posts.push(newPost);
    res.status(201).json(posts);
}

// @desc Update  post
// @route  PUT /api/posts
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }
    post.title = req.body.title;
    res.status(201).json(posts);
}


// @desc DELETE  post
// @route  delete /api/posts/:id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }
    posts = posts.filter((post) => post.id !== id);
    res.status(201).json(posts);
}