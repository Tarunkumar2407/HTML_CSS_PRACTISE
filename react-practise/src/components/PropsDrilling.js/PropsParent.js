import React, { createContext } from "react";
import ChildA from "./ChildA";

const data1 = createContext();
const data2 = createContext();
const PropsParent = () => {
  const name = "Tarun";
  const email = "tarun@gmail.com";
  return (
    <div>
      <data1.Provider value={name}>
        <data2.Provider value={email}>
            <ChildA />
        </data2.Provider>
      </data1.Provider>
    </div>
  );
};

export default PropsParent;
export { data1 , data2};
