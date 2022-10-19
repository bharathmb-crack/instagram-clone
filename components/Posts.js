import Post from "./Post";

const poste = [
  {
    id: 1,
    username: "Bharath Byahatti",
    userimage:
      "https://i.postimg.cc/PTCjF9f4/Whats-App-Image-2022-05-09-at-2-08-10-PM.jpg",
    img: "https://i.postimg.cc/PTCjF9f4/Whats-App-Image-2022-05-09-at-2-08-10-PM.jpg",
    caption: "Yo What is Up There! How you doin",
  },
  {
    id: 2,
    username: "Bharath Byahatti",
    userimage:
      "https://i.postimg.cc/PTCjF9f4/Whats-App-Image-2022-05-09-at-2-08-10-PM.jpg",
    img: "https://i.postimg.cc/PTCjF9f4/Whats-App-Image-2022-05-09-at-2-08-10-PM.jpg",
    caption: "Yo What is Up There! How you doin",
  },
];

const Posts = () => {
  return (
    <div>
      {poste.map((pro) => (
        <Post
          key={pro.id}
          id={pro.id}
          userName={pro.username}
          userImage={pro.userimage}
          image={pro.img}
          caption={pro.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
