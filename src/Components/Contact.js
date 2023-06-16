import { Button, Form } from "react-bootstrap";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="feedbackContainer flex">
        <h2>Give Feedback</h2>
        <Form action="">
          <Form.Control type="text" placeholder="Email" />
          <Form.Control type="password" placeholder="Password" />
          <Form.Control
            as="textarea"
            placeholder="comment"
            style={{ height: "100px" }}
          />
          <Button
            variant="primary"
            className="feedback-btn 
"
          >
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};
