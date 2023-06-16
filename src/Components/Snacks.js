import { Button, Col, Row } from "react-bootstrap";
import { Layout } from "./Layout";

export const Snacks = () => {
  return (
    <Layout>
      <div className="container">
        <h2>Snacks</h2>
        <div className="snack-container">
          <Row>
            <Col md={3}>
              <div className="item-snack shadow flex ">
                <div className="snackImage">
                  <img src="https://cdn.ios.net.au/processed/1500x1500/c/COK0300_1.jpg" />
                </div>
                <div className="snack-desc text-center flex ">
                  <p>price</p>
                  <Button variant="success">Add to Cart</Button>
                  <Button variant="success">Buy</Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};
