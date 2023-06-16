import { HotOffer } from "./HotOffer";
import { Layout } from "./Layout";
import React from "react";
import { OrderOption } from "./OrderOption";
import { Contact } from "./Contact";
import { Button, Carousel } from "react-bootstrap";
import img1 from "../assets/avocado.jpg";
import img2 from "../assets/ferero.jpg";
import img3 from "../assets/smith.jpg";
export const Home = () => {
  return (
    <Layout>
      <section>
        <div className="bannerContainer flex">
          <div className="intro">
            <h1>How is your day?</h1>
            <h2>Buy snacks and drinks 20% off</h2>
            <div className="option flex">
              <Button>Find Snacks</Button>
              <Button>Find Drinks</Button>
            </div>
          </div>
          <div className="slidesContainer">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={img1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
      <HotOffer />
      <OrderOption />
      <Contact />
    </Layout>
  );
};
