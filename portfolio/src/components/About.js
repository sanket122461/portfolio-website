import React from "react";

export default function About() {
  return (
    <section id="about" className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Random Male Profile" className="img-fluid rounded-circle mb-3" />

        </div>
        <div className="col-md-8">
          <h2>About Me</h2>
          <p>
            I’m a passionate web developer with expertise in React.js, PHP, MySQL, and modern web technologies.
            I love building clean, responsive, and scalable applications.
          </p>
          <ul>
            <li><strong>Email:</strong> sanketkapse709@gmail.com</li>
            <li><strong>Location:</strong> Pune, India</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
