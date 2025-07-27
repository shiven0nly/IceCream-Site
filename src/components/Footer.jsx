import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            Have questions about our flavors or want to place a custom order? We'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Visit Our Store</h3>
            
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>Address</h4>
                <p>123 Street<br />Imagine District<br />Flavor City </p>
              </div>
            </div>

            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>123457890</p>
              </div>
            </div>

            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>hello@ices.com</p>
              </div>
            </div>

            <div className="info-item">
              <Clock className="info-icon" />
              <div>
                <h4>Hours</h4>
                <p>Mon-Thu: 10am-9pm<br />Fri-Sat: 10am-11pm<br />Sun: 12pm-8pm</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-section">
              <h4>Follow Us</h4>
              <ul className="footer">
                <li>
                  <a href="#" aria-label="Instagram">
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Facebook">
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter">
                    <Twitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form className="form" onSubmit={handleSubmit}>
            <div className="title">Send Message</div>
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
            <button type="submit" className="submit-btn">
              <div>Send Message</div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;