import React from "react";

const Summary = ({ value }) => {
    const totoalWord=value?.split(" ").filter(word=>word !== "").length;
  return (
    <div className="bg-primary h-[10%] flex justify-center items-center gap-16 py-2 *:text-primary-content *:font-semibold">
      <p className="">
        Number of words : {totoalWord}
      </p>
      <p className="">
        Number of Characters : {value?.length}
      </p>
      <p className="">
        Reading Time : {0.008 * totoalWord}
      </p>
      
    </div>
  );
};

export default Summary;
