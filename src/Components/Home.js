import { HotOffer } from "./HotOffer";
import { Layout } from "./Layout";
import React from "react";
import { OrderOption } from "./OrderOption";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <Layout>
      <section>
        <div className="bannerContainer flex">
          <div className="intro">
            <h1>How is your day?</h1>
            <h2>Buy snacks and drinks 20% off</h2>
            <div className="option">
              <button>Find Snacks</button>
              <button>Find Drinks</button>
            </div>
          </div>
          <div className="slidesContainer"></div>
        </div>
      </section>
      <HotOffer />
      <OrderOption />
      <Contact />
    </Layout>
  );
};
