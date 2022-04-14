import React from "react";

const List = ({ people }) => {
  const today = new Date();

  const getAge = (dateOfBirth) => {
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

  var todayDate = [];
  todayDate = people.filter((person, id) => {
    const { dateOfBirth } = person;
    const date = stringToDate(dateOfBirth);
    return (
      today.getDate() === date.getDate() && today.getMonth() === date.getMonth()
    );
  });

  return (
    <>
      {todayDate.map((person) => {
        const { id, name, dateOfBirth, image } = person;
        const age = getAge(stringToDate(dateOfBirth));
        const formattedDateOfBirth = formatDate(stringToDate(dateOfBirth));

        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>
                {formattedDateOfBirth} - {age} years
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
