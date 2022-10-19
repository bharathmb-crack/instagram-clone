import faker from "faker";
import { useEffect, useState } from "react";
import { image } from "./Storeies";

const Suggestions = () => {
  const [suggests, SetSuggests] = useState([]);

  useEffect(() => {
    const sugest = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    SetSuggests(sugest);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mt-4 ml-10">
        <p className="text-gray-400">Suggestions for you</p>
        <p className="text-gray-800">See All</p>
      </div>

      {suggests.map((pro) => (
        <div className="flex items-center" key={pro.id}>
          <img
            src={image[pro.id]}
            alt=""
            className="h-12 w-12 rounded-full mt-4 ml-10 border p-[2px]"
          />
          <div className="ml-4  flex-1 ">
            <h2 className="font-semibold text-sm">{pro.name}</h2>
            <h3 className="text-gray-500 text-xs">
              works at {pro.company.name}
            </h3>
          </div>
          <button className="text-cyan-500">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
