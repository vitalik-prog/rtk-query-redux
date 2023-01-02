import { useEffect, useState } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  const { data: posts, error, isLoading } = postAPI.useFetchPostsQuery(limit);
  const [createPost, { isLoading: isCreating }] = postAPI.useCreatePostMutation();
  const [updatePost, { isLoading: isUpdating }] = postAPI.useUpdatePostMutation();
  const [deletePost, { isLoading: isDeleting }] = postAPI.useDeletePostMutation();

  useEffect(() => {
    // setTimeout(() => setLimit(5), 2000);
  }, []);

  const handleCreatePost = async () => {
    const title = prompt("Enter title");
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (id: number) => {
    deletePost(id);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  if (isLoading || isCreating || isDeleting || isUpdating) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <button onClick={handleCreatePost}>Create post</button>
      {posts && posts.map((post: IPost) => (
        <PostItem key={post.id} post={post} removePost={handleRemove} updatePost={handleUpdate} />
      ))}
    </div>
  );
};

export default PostContainer;
