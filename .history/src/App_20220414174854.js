import React, { useState } from "react";
import List from "./List";
import FilteredList from "./FilteredList";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3> birthdays today</h3>
        <FilteredList people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
