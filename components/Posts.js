import { useEffect, useState } from "react";
import { collection, orderBy, query } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import Post from "./Post";
import { db } from "../firesbase";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  console.log(posts);

  return (
    <div>
      {posts.map((pro) => (
        <Post
          key={pro.id}
          id={pro.id}
          userName={pro.data().username}
          userImage={pro.data().userimage}
          image={pro.data().postimage}
          caption={pro.data().description}
        />
      ))}
    </div>
  );
};

export default Posts;
