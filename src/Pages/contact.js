import React, { use, useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../index.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_k313fi3", "contact_form", form.current, {
        publicKey: "bmEfw8nCY3g9MocDW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED", error.text);
        }
      )
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
      })
      .then(setShowPopup(true));
  };
  return (
    <div>
      <form ref={form} className="form">
        <div className="name">
          <label>Name</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="email">
          <label>Email</label>
          <input
            type="text"
            value={email}
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="message">
          <label>Message</label>
          <textarea
            placeholder="Type your message here.."
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="button">
          <button onClick={handleSubmit} type="submit" value="Send">
            Submit
          </button>
        </div>
      </form>
      <div>
        <Modal show={showPopup} onHide={() => setShowPopup(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Message Submitted</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your message has been successfully submitted!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setShowPopup(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Contact;
