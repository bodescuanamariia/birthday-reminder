import React, { useState } from "react";
import List from "./List";
import FilteredList from "./FilteredList";
import data from "./data";

function App() {
  const [people, setPeople] = useState([data]);
  const [length, setLength] = useState(0);

  return (
    <main>
      <section className="container">
        <h3>{length} birthdays today</h3>
        <FilteredList people={people} length />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
