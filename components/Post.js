import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

const Post = ({ id, userName, userImage, image, caption }) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* userimage and username and 3 dots */}
      <div className="flex items-center p-5">
        <img
          className="w-10 h-10 object-contain rounded-full border p-1 mr-3"
          src={userImage}
          alt=""
        />
        <p className="text-sm font-semibold flex-1 text-gray-700">{userName}</p>
        <DotsHorizontalIcon className="h-5 text-gray-700" />
      </div>

      <img className="w-full object-cover" src={image} alt="" />

      <div className="flex justify-between m-2">
        <div className="flex space-x-4 items-center">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>

        <BookmarkIcon className="btn" />
      </div>

      <p className="m-2">
        <span className="font-semibold mr-3">{userName}</span>
        {caption}
      </p>

      {/* comments  */}

      <form className="flex items-center m-2  px-2 py-0.5">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="add a comment..."
          className="border-none focus:ring-0 flex-1 bg-transparent outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
};

export default Post;
