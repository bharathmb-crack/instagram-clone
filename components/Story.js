import React from "react";

const Story = ({ img, name }) => {
  return (
    <div className="">
      <img
        className="h-15 w-15 rounded-full p-[1.5px] bg-red-500 border-2 object-contain hover:scale-110 transiton transform duration-200 ease-out cursor-pointer"
        src={img}
      />
      <p className="text-xs w-14 text-center font-medium truncate ">{name}</p>
    </div>
  );
};

export default Story;
