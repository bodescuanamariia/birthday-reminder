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
  const checkBirthday = (date) => {
    const today = new Date();
    console.log(today.getDate());
    if (today.getDay() === date.getDay) {
      console.log("yes");
    } else {
      console.log("no");
    }
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, dateOfBirth, image } = person;
        const age = getAge(stringToDate(dateOfBirth));
        const formattedDateOfBirth = formatDate(stringToDate(dateOfBirth));
        console.log(checkBirthday(stringToDate(dateOfBirth)));
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
