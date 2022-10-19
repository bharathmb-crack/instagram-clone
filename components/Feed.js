import React from "react";
import Posts from "./Posts";
import Storeies from "./Storeies";
import MiniPorfile from "./MiniPorfile";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        {/* stories */}
        <Storeies />
        <Posts />
      </section>

      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-20">
          <MiniPorfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
};

export default Feed;
