import React from "react";
import Storeies from "./Storeies";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto">
      <section className="col-span-2">
        {/* stories */}
        <Storeies />

        {/* post feed  */}
      </section>

      <section>
        {/* mini profile */}
        {/* suggestion */}
      </section>
    </main>
  );
};

export default Feed;
