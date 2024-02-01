import { useState, useEffect } from "react";

export default function useSetAllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const setNewUser = (user) => {
    setLoggedInUser(user);
    setAllUsers((prev) => [...prev, user]);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users) {
      setAllUsers(users);
    }
  }, []);

  const setupTestUsers = () => {
    const testUsers = [
      {
        name: "ben",
        username: "ben",
        password: 1,
        description:
          "When I was a teen, there was a popular hit song by Johnny Lee called “Looking for Love in All the Wrong Places.” The song spoke to the hope and the challenge of finding love—a message that still rings true.",
        image: "https://source.unsplash.com/random",
        likes: [],
      },
      {
        name: "moa",
        username: "moa",
        password: 1,
        description:
          "When I was a teen, there was a popular hit song by Johnny Lee called “Looking for Love in All the Wrong Places.” The song spoke to the hope and the challenge of finding love—a message that still rings true.",
        image: "https://source.unsplash.com/random",
        likes: [],
      },
      {
        name: "peter",
        username: "peter",
        password: 1,
        description:
          "When I was a teen, there was a popular hit song by Johnny Lee called “Looking for Love in All the Wrong Places.” The song spoke to the hope and the challenge of finding love—a message that still rings true.",
        image: "https://source.unsplash.com/random",
        likes: [],
      },
      {
        name: "sara",
        username: "sara",
        password: 1,
        description:
          "When I was a teen, there was a popular hit song by Johnny Lee called “Looking for Love in All the Wrong Places.” The song spoke to the hope and the challenge of finding love—a message that still rings true.",
        image: "https://source.unsplash.com/random",
        likes: [],
      },
    ];
    setAllUsers(testUsers);
    localStorage.setItem("users", JSON.stringify(testUsers));
  };

  return {
    allUsers,
    setAllUsers,
    loggedInUser,
    setLoggedInUser,
    setNewUser,
    setupTestUsers,
  };
}
