import SwipeCTA from "../components/SwipeCTA";
import Carousel from "../components/Carousel";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { ContextProvider } from "../context/context";

export default function MainPage() {
  const { loggedInUser } = useContext(ContextProvider);
  const [carouselImages, setCarouselImages] = useState([]);
  const [activeUser, setActiveUser] = useState([]);

  const removeCarouselImage = (activeUser) => {
    const newUsers = carouselImages.filter(
      (user) => user.username !== activeUser.username
    );
    setCarouselImages(newUsers);
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const usersWithoutUser = users.filter(
      (u) => u?.username !== loggedInUser.username
    );

    setCarouselImages(usersWithoutUser);
  }, [loggedInUser]);

  useEffect(() => {
    const setRandomImage = () => {
      const randomImage =
        carouselImages[Math.floor(Math.random() * carouselImages.length)];
      setActiveUser(randomImage);
    };
    setRandomImage();
  }, [carouselImages]);

  return (
    <>
      <div>
        <Carousel
          setActiveUser={setActiveUser}
          carouselImages={carouselImages}
        />
        <SwipeCTA
          activeUser={activeUser}
          removeCarouselImage={removeCarouselImage}
          carouselImages={carouselImages}
        />
      </div>
    </>
  );
}
