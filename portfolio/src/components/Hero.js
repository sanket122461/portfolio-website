import React, { useEffect } from "react";
import AOS from "aos";

export default function Hero() {
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  return (
    <section id="home" className="d-flex align-items-center justify-content-center text-center vh-100 bg-dark text-white">
      <div data-aos="fade-up">
        <h1 className="fw-bold">Hi, I'm <span className="text-info">Sanket Kapase</span></h1>
        <p className="lead">Full Stack Web Developer | PHP | ReactJS | MySQL</p>
        <a href="#projects" className="btn btn-info mt-3">View My Work</a>
      </div>
    </section>
  );
}
