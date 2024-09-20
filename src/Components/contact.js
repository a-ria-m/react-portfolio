import React from 'react';

const Contact = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    alert('Message successfully sent!');
  };

  return (
    <div className="content">
      <h3>Contact Me</h3>
      <p>Thank you for your interest!</p>
      <div className="container-sm">
        <form className="row g-3 needs-validation form" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="validationCustom01" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              placeholder="Name"
              required
            />
          </div>
          <div className="row">
            <label htmlFor="validationCustom02" className="form-label"></label>
            <input
              type="email"
              className="form-control"
              id="validationCustom02"
              placeholder="Email"
              required
            />
          </div>
          <div className="row">
            <label htmlFor="message" className="form-label"></label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="col-12" align="center">
            <button className="btn btn-primary" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;