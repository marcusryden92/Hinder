import { createContext, useState, useEffect } from "react";
import { useAuth } from "./AuthenticationContext";
import { setItem } from "localforage";

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
  handleMatch: () => {},
});

export const Context = ({ children }) => {
  const [userImage, setUserImage] = useState(null);
  const { allUsers, user } = useAuth();
  const [selectedUser, setSelectedUser] = useState(null);
  const [carouselUsers, setCarouselUsers] = useState([]);

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
  const handleMatch = (selectedUser) => {
    const newLike = {
      swiper: user.username,
      like: selectedUser.username,
    };

    const matches = JSON.parse(localStorage.getItem("matches")) || [];

    if (
      !matches.some(
        (match) =>
          match.swiper === newLike.swiper && match.like === newLike.like
      )
    ) {
      matches.push(newLike);
    }

    localStorage.setItem("matches", JSON.stringify(matches));

    const mutualMatches = matches
      .filter((match1) =>
        matches.some(
          (match2) =>
            match1.swiper === match2.like && match1.like === match2.swiper
        )
      )
      .map((match) => ({
        user1: match.swiper,
        user2: match.like,
      }));

    console.log(mutualMatches);

    localStorage.setItem("matches", JSON.stringify(matches));
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
    handleMatch,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
