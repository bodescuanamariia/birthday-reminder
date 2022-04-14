import React from "react";

const List = ({ people }) => {
  const getAge = (dateOfBirth) => {
    const today = new Date();
    const age = today.getFullYear - dateOfBirth.getFullYear;
    console.log(age)
    );
    return age;
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, dateOfBirth, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>
                {dateOfBirth.toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
                - {getAge(dateOfBirth)}
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;