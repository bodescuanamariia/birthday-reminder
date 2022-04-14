import React, { useState } from "react";
import List from "./List";
import FilteredList from "./FilteredList";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const today = new Date();
  console.log(today);

  return (
    <main>
      <article>
        <section className="container">
          <h2 id="heading">{today}</h2>
        </section>
        <section className="container">
          <h3>Birthdays today</h3>
          <FilteredList people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
      </article>
    </main>
  );
}

export default App;
