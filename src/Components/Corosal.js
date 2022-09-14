import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2014/07/04/19/15/man-384178__340.jpg"
          height="500"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Dream Bikes</h3>
          <p>
            It’s your road others can ride it with you but no one can ride it
            for you
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246__340.jpg"
          alt="Second slide"
          height="500"
        />

        <Carousel.Caption>
          <h3>Dream Cars</h3>
          <p>
            When a man opens a car door for his wife, it's either a new car or a
            new wife
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2019/04/30/10/31/sea-4168234_960_720.jpg"
          alt="Third slide"
          height="500"
        />

        <Carousel.Caption>
          <h3>Your Dream Desire</h3>
          <p>
            The nice thing about living in a small town is that when you don't
            know what you're doing, someone else does.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
