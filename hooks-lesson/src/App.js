import React from "react";
import Accordion from "./components/Accordion";
import data from "./constant/data";


const App = () => {
  return (
    <div>
      <Accordion items={data.items} />
    </div>
  );
};
export default App;
