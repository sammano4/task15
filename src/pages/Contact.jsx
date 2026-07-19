import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    state: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("✅ Thank you! Your message has been sent.");

    setForm({
      name: "",
      mobile: "",
      email: "",
      state: "",
      address: "",
      message: "",
    });
  };

  return (
    <section className="container">
      <div className="contact-box">
        <h1>📞 Contact Us</h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          We'd love to hear from you.
          Send your message and we'll get back
          to you soon.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            <option>Tamil Nadu</option>
            <option>Kerala</option>
            <option>Karnataka</option>
            <option>Andhra Pradesh</option>
            <option>Telangana</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
          </select>

          <textarea
            name="address"
            placeholder="Address"
            rows="4"
            value={form.address}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}