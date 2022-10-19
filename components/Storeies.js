import * as faker from "faker";
import { useState, useEffect } from "react";
import Story from "./Story";

const Storeies = () => {
  const [suggestStories, setSuggeststoreies] = useState([]);

  const image = [
    "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    "https://joeschmoe.io/api/v1/mail@ashallendesign.co.uk",
    "https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg",
    "https://robohash.org/mail@ashallendesign.co.uk",
    "https://via.placeholder.com/250",
    "https://baconmockup.com/250/250/",
    "https://robohash.org/mail@ashallendesign.co.uk",
    "https://www.fillmurray.com/250/250",
    "https://placekitten.com/250/250",
    "https://placebear.com/250/250",
    "https://www.placecage.com/250/250",
    "https://placebeard.it/250/250",
    "https://robohash.org/mail@ashallendesign.co.uk",
    "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    "https://www.fillmurray.com/250/250",
    "https://joeschmoe.io/api/v1/mail@ashallendesign.co.uk",
    "https://placekitten.com/250/250",
    "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
  ];
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    console.log(suggestions);

    setSuggeststoreies(suggestions);
  }, []);

  return (
    <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-black space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm ">
      {suggestStories &&
        suggestStories.map((profile) => (
          <Story key={profile.id} img={image[profile.id]} name={profile.name} />
        ))}
    </div>
  );
};

export default Storeies;
