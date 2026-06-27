import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactPromise = emailjs
      .sendForm("service_k313fi3", "contact_form", e.target, {
        publicKey: "bmEfw8nCY3g9MocDW",
      })
      .then(() => {
        console.log("SUCCESS!");
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("FAILED", error.text);
      })
      .then(() => setShowPopup(true));

    const replyPromise = emailjs.send(
      "service_k313fi3",
      "template_eoxb5x6",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      { publicKey: "bmEfw8nCY3g9MocDW" },
    );

    Promise.all([contactPromise, replyPromise])
      .then(() => {
        console.log("SUCCESS!");
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("FAILED", error.text);
      });
  };
  return (
    <div className="bg-teal-950 text-white min-h-screen px-10 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Contact</h1>
        <p className="text-gray-400">
          Get in touch for inquiries or collaborations
        </p>
      </div>

      {/* Back */}
      <div className="text-center mb-10">
        <NavLink to="/" className="text-blue-400 hover:underline">
          ← Back to Gallery
        </NavLink>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg">
        {submitted ? (
          <p className="text-green-400 text-center">
            ✅ Message sent successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-800 text-white focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-800 text-white focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-800 text-white focus:outline-none"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition rounded p-3 font-semibold"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
