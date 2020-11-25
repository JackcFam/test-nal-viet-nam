import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
function BlogNew(props) {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [topnew, setTopnew] = useState([]);
  useEffect(() => {
    async function getTopnew() {
      const request = await fetch("https://test-nal.herokuapp.com/new-post");
      const topnew = await request.json();
      setTopnew(topnew);
    }
    getTopnew();
  }, []);
  return (
    <div className="warp-car-top">
      <div className="top1">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {topnew.map((item) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className="top1">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {topnew.map((item) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>

                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className="top1">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {topnew.map((item) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                 
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default BlogNew;
