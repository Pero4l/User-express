const {readPosts, writePosts} = require("./file-check")

function createPost(req, res){
    const {title, description, type, price} = req.body

    let post = readPosts();

    const id = post.length + 1;
  const date = new Date().toLocaleString();

  if(title=== post.title && description === post.description && type === post.type && price === post.price){
    return res.status(400).json({
      success: false,
      message: "Post already exist in the data base"
    })
  }



    const newPost = {
        id,
        title,
        type,
        description,
        price,
        date
    }

    post.push(newPost),
    writePosts(post)

    res.status(201).json({
    success: true,
    message: "Ticket generated successfully",
    data: newPost
  });

}

module.exports = {
  createPost
}