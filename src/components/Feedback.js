import React from 'react';
import '../styles.css';

const Feedback = () => {
  return (
    <div className="container2 ">
      <div className="text-center flex flex-row justify-center mb-12">
        <div className=" text-center w-fit">
        <h2 className="  text-5xl font-bold ">Sign up today.</h2>
        
          <div className="flex flex-row justify-center mt-12 gap-2">
          <a href="#" className="button  button-primary">Get Started</a>
            <a href="#" className="button button-secondary">Learn More</a>
          </div>
          </div>
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <TestimonialCard name="Eva Elle" username="@eveelle" />
        <TestimonialCard name="Guy McCoy" username="@guymccoy" />
        <TestimonialCard name="Kayla Ray" username="@kaylaray" />
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, username }) => {
  return (
    <div className="card border shadow mt-4">
      <div className="info2 group flex items-center ms-3 my-2">
        <img src="https://placehold.co/80x80" alt={name} className="avatar" />
        <div>
          <h3 className=" text-sm font-medium text-slate-900 group-hover:text-black">{name}</h3>
          <p className=" text-sm font-medium text-slate-800 group-hover:text-slate-300">{username}</p>
        </div>
      </div>
      <div>
         <p className=" max-w-52  mx-2 mb-20">
        Thank you for building such an empowering tool, especially for designers! The site went from Figma to Framer in less than a week!
      </p> 
      </div>
    
    </div>
  );
};


export default Feedback;
