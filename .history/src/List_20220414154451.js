import React from "react";

const List = ({ people }) => {
  const getAge = (dateOfBirth) => {
    const today = new Date();
    const age = today.getFullYear() - dateOfBirth.getFullYear();
    return age;
  };
  const stringToDate = (dateOfBirth) => {
    const date = new Date(dateOfBirth);
    return date;
  };
  const formatDate = (date) => {
    const formattedDate = date.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, dateOfBirth, image } = person;
        const age = getAge(stringToDate(dateOfBirth));
        const dateOfBirthFormat = formatDate(stringToDate(dateOfBirth));
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>
                {dateOfBirth} - {age} years
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
