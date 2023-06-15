export const Contact = () => {
  return (
    <section className="contact">
      <div className="feedbackContainer flex">
        <h2>Give Feedback</h2>
        <form action="">
          <input type="text" placeholder="Email" className="form-control" />
          <input
            type="password"
            placeholder="Password"
            className="form-control"
          />
          <textarea
            name="feedback"
            id="feedback"
            cols="30"
            rows="5"
            className="form-control"
            placeholder="Message"
          ></textarea>
          <input type="button" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    </section>
  );
};
