import { useState } from "react";

export default function useSetCarousel() {
  const [carouselImages, setCarouselImages] = useState([]);

  const removeCarouselImage = (activeUser) => {
    const newUsers = carouselImages.filter(
      (user) => user.username !== activeUser.username
    );
    setCarouselImages(newUsers);
  };

  return { carouselImages, setCarouselImages, removeCarouselImage };
}
