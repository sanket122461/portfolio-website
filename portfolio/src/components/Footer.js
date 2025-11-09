import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>© {new Date().getFullYear()} Sanket Kapase. All Rights Reserved.</p>
      <div>
        <a href="https://github.com/sanket122461" className="text-white mx-2"><FaGithub /></a>
        <a href="https://linkedin.com/sanketkapse709" className="text-white mx-2"><FaLinkedin /></a>
        <a href="mailto:sanketkapse709@gmail.com" className="text-white mx-2"><FaEnvelope /></a>
      </div>
    </footer>
  );
}
