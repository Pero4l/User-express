const {readPosts, writePosts} = require("./file-check")

function createPost(req, res){
    const {title, description, type, price} = req.body

    let post = readPosts();

    const id = users.length + 1;
  const date = new Date().toLocaleString();

  if(title=== post.title && description === post.description && type === post.type && price === post.price){
    re
  }


    const newPost = {
        id,
        title,
        type,
        description,
        price,
        date
    }


}