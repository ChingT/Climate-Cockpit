import { useSelector } from "react-redux";
import SearchAndFilterBar from "../components/SearchAndFilterBar/SearchAndFilterBar.jsx";
import PostsGrid from "../components/Posts/PostsGrid.jsx";

const PostsPage = () => {
  const filterStateURLs = {
    All: "/social/posts/",
    Liked: "/social/posts/likes/",
    Friends: "/social/posts/friends/",
    Follow: "/social/posts/following/",
  };
  const filter = useSelector((store) => store.postsFilter.filter);

  return (
    <>
      <SearchAndFilterBar />
      <PostsGrid url={filterStateURLs[filter]} columnsCount={2} gutter="2rem" />
    </>
  );
};

export default PostsPage;
