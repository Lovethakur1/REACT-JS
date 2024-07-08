import React, { useEffect } from "react";
import { PostCard, Container } from "../components";
import appwriteService from "../appwrite/config";

function AllPost() {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {}, []);
  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        {
            posts.map((post)=>( <AllPost key={post.$id} post={post} /> ))
        }
      </Container>
    </div>
  );
}

export default AllPost;
