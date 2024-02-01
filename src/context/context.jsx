import { createContext, useState, useEffect } from "react";
import { useAuth } from "./AuthenticationContext";
import { setItem } from "localforage";
import { Users } from "lucide-react";

export const ContextProvider = createContext({
  userImage: null,
  saveImage: () => {},
  allUsers: null,
  user: null,
  handleImageClick: () => {},
  selectedUser: null,
  setSelectedUser: () => {},
  handleRemoveImage: () => {},
  carouselUsers: [],
  setCarouselUsers: () => {},
  handleLike: () => {},
  personalLikes: [],
});

export const Context = ({ children }) => {
  const [userImage, setUserImage] = useState(null);
  const { allUsers, user } = useAuth();
  const [selectedUser, setSelectedUser] = useState(null);
  const [carouselUsers, setCarouselUsers] = useState([]);

  let [personalLikes, setPersonalLikes] = useState([]);

  const handleRemoveImage = (selectedUser) => {
    const newUsers = carouselUsers.filter(
      (user) => user.username !== selectedUser.username
    );
    setTimeout(() => {
      setSelectedUser(newUsers[Math.floor(Math.random() * newUsers.length)]);
    }, 200);
    setCarouselUsers(newUsers);
  };

  const handleImageClick = (user) => {
    setSelectedUser(user);
  };

  const saveImage = (img) => {
    const imageSrc = img.current.getScreenshot();
    setUserImage(imageSrc);
  };

  const handleLike = (selectedUser) => {
    // Retrieve data from local storage
    const matches = JSON.parse(localStorage.getItem("matches")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Create a new match
    const newLike = {
      swiper: user.username,
      like: selectedUser.username,
    };
    matches.push(newLike);

    // Find the current user in the users arra
    const newUserLike = selectedUser;
    let foundUserIndex = users.findIndex((u) => u.username === user.username);
    if (foundUserIndex) {
      users[foundUserIndex].likes.push(newUserLike);
    }

    setPersonalLikes(users[foundUserIndex].likes);

    localStorage.setItem("matches", JSON.stringify(matches));
    localStorage.setItem("users", JSON.stringify(users));
  };

  const value = {
    userImage,
    saveImage,
    allUsers,
    handleImageClick,
    selectedUser,
    setSelectedUser,
    handleRemoveImage,
    carouselUsers,
    setCarouselUsers,
    user,
    handleLike,
    personalLikes,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
