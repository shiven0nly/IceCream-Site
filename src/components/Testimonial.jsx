import React from 'react';
import './Testimonial.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Ram',
      message: 'This ice cream is pure bliss! The creamy texture and rich flavors make every bite a delight. My kids can’t get enough of the chocolate fudge!          🍦🍦🍦🍦🍦',
    },
    {
      name: 'Rohan',
      message: 'Best ice cream I’ve ever tasted! The strawberry swirl is so fresh, it’s like eating summer in a cone. Highly recommend!       ..🍦🍦🍦🍦',
    },
    {
      name: 'Krishna',
      message: 'Best ice cream I’ve ever tasted! The strawberry swirl is so fresh, it’s like eating summer in a cone. Highly recommend!       ..🍦🍦🍦🍦',
    },
    {
      name: 'Mohit',
      message: 'Absolutely love the unique flavors! The salted caramel is a game-changer, and the quality is unmatched. Treat yourself!   🍦🍦🍦🍦🍦',
    },
    {
      name: 'Sita',
      message: 'Absolutely love the unique flavors! The salted caramel is a game-changer, and the quality is unmatched. Treat yourself!   🍦🍦🍦🍦🍦',
    },
  ];

  return (
    <section className="testimonial-section">
      <h2>Our Happy Customers</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </div>
      <p className="emoji-note">*more🍦shows goodness</p>
    </section>
  );
};

export default TestimonialSection;