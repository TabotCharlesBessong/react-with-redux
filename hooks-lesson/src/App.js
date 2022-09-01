import React from "react";
import {Accordion , Search} from "./components";
import data from "./constant/data";
// const url =
// 	"https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming";

const App = () => {
  return (
    <div>
      <Search/>
      {/* <Accordion items={data.items} /> */}
    </div>
  );
};
export default App;
