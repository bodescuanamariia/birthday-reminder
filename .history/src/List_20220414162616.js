import React, { useState } from "react";

const List = ({ people }) => {
  const [celebratedPeople, setCelebratedPeople] = useState([]);
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
    return (
      today.getDate() === date.getDate() && today.getMonth() === date.getMonth()
    );
  };

  const removePerson = (id) => {
    const newCelebratedPeople = people.filter((person) => person.id !== id);
    setCelebratedPeople(newCelebratedPeople);
  };

  const getCelebratedPeople = (people) => {
    people.map((person) => {
      const { id, name, dateOfBirth, image } = person;
      if (!checkBirthday(stringToDate(dateOfBirth))) {
        removePerson(id);
      }
    });
  };

  return (
    <>
      {/* {people.map((person) => {
        const { id, name, dateOfBirth, image } = person; */}
      {getCelebratedPeople(people)}
      {celebratedPeople.map((person) => {
        const { id, name, dateOfBirth, image } = person;
        const age = getAge(stringToDate(dateOfBirth));
        const formattedDateOfBirth = formatDate(stringToDate(dateOfBirth));

        if (checkBirthday(stringToDate(dateOfBirth))) {
        }
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
