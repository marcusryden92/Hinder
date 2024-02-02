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

  return {
    allUsers,
    setAllUsers,
    loggedInUser,
    setLoggedInUser,
    setNewUser,
  };
}
