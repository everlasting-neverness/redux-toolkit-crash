import { postsApi } from "../services/PostsService";
import PostItem from "./PostItem";

function PostsContainer() {
  const { data } = postsApi.useFetchAllPostsQuery(5);

  return (
    <ul className="postsList">
      {data?.map(post => (
        <li key={post.id} className="postsListItem">
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
}

export default PostsContainer