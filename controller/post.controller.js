import Post from "../model/post.model.js";
export const createPost = async (req, res) => {
  const { title, body } = req.body;
  try {
    let post = new Post(title, body);
    post = await post.save();
    res.send({ message: "Post created!", post });
  } catch (error) {
    console.log("Error creating post:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const findPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    const [post, _] = await Post.fetchById(postId);
    if (post.length === 0) {
      return res.status(404).send({ message: "Post not found" });
    }
    res.send({ message: "this is your post", post: post[0] });
  } catch (error) {
    console.log("Error creating post:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const getAllPost = async (req, res) => {
  try {
    const [rows, fields] = await Post.fetchAll();
    res.send({ message: "All posts:", rows, fields });
  } catch (err) {
    console.error("Error fetching posts:", err);
  }
};

export const updateByIdPost = async (req, res) => {
  const postId = req.params.id;
  const { title, body } = req.body;
  try {
    let newPost = await Post.updateById(postId, title, body);
    res.send({ message: "Post updated!", newPost });
  } catch (err) {
    console.error("Error fetching posts:", err);
  }
};

export const deleteById = async (req, res) => {
  try {
    const postId = req.params.id;
    const [rows, fields] = await Post.deleteById(postId);
    res.send({ message: "post deleted :", rows, fields });
  } catch (err) {
    console.error("Error fetching posts:", err);
  }
};
