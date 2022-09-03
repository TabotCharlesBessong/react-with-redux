import React, { useState } from "react";
import { Accordion, Search, Dropdown } from "./components";
import data from "./constant/data";





const App = () => {
  const [selected, setSelected] = useState(data.options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={data.options}
        />
      ) : null}
    </div>
  );
};
export default App;
