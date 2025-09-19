const {readPosts, writePosts} = require("./file-check")

function createPost(req, res){
    const {title, description, type, price} = req.body

    let post = readPosts();

    const id = users.length + 1;
  const date = new Date().toLocaleString();


    const newPost = {
        id,
        title,
        type,
        description,
        price,
        date
    }
}