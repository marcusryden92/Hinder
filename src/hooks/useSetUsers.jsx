import { useState, useEffect } from "react";

export default function useSetAllUsers() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const setNewUser = (newUser) => {
    setLoggedInUser(newUser);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  };

  return {
    loggedInUser,
    setLoggedInUser,
    setNewUser,
  };
}
