import { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  removePost: (id: number) => void;
  updatePost: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, removePost, updatePost }) => {
  const handleDelete = () => {
    removePost(post.id);
  };

  const handleUpdate = () => {
    const title = prompt("Update post");
    updatePost({ ...post, title} as IPost);
  };

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default PostItem;
