import { Layout } from "./Layout";

export const About = () => {
  return (
    <Layout>
      <section>
        <div class="market-banner">
          <div class="banner-text">
            <h1 class="">About Us</h1>
          </div>
        </div>
      </section>
      <section class="vision-parent flex pb-5">
        <div class="vision-container flex">
          <div class="vision flex">
            <h1>Our Vision</h1>
            <p>
              our vision is to be the leading supermarket that sets the standard
              for excellence in quality, convenience, and customer service. We
              strive to create an exceptional shopping experience that exceeds
              the expectations of our customers and becomes an integral part of
              their daily lives.
            </p>
          </div>
          <div class="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOX1a9mgYLd9JlIcwyAGvkvjkyergWGNdBiw&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};
