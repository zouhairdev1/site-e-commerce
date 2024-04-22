import React from 'react';
import '../styles.css';

const Feedback = () => {
  return (
    <div className="container2">
      <div className="text-center mb-12">
        <h2 className="title2">Sign up today.</h2>
        <div className="buttons">
          <div className="flex">
          <a href="#" className="button button-primary">Get Started</a>
            <a href="#" className="button button-secondary">Learn More</a>
          </div></div>
      </div>
      <div className="testimonial-cards">
        <TestimonialCard name="Eva Elle" username="@eveelle" />
        <TestimonialCard name="Guy McCoy" username="@guymccoy" />
        <TestimonialCard name="Kayla Ray" username="@kaylaray" />
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, username }) => {
  return (
    <div className="card2">
      <div className="info2">
        <img src="https://placehold.co/80x80" alt={name} className="avatar" />
        <div>
          <h3 className="name2">{name}</h3>
          <p className="username2">{username}</p>
        </div>
      </div>
      <p className="testimonial">
        Thank you for building such 
        an empowering tool, 
        especially for designers! 
        The site went from Figma to Framer in less than a week!
      </p>
    </div>
  );
};


export default Feedback;
