import React from "react";

const projects = [
  {title: "Export-import Website", desc: "A Full Stack Web Application using PHP and MySQl.", link:"https://github.com/sanket122461/export-import-website"},
  {titlle:"Fleet management System", desc:"A web application to manage fleet operations using PHP and MySqql.",link:"https://github.com/sanket122461/Fleet"},
  { title:"Real-Time Chat App", desc: "Built using PHP, MySQL, and WebSockets.", link: "https://github.com/sanket122461/Real-Time-Chat-Application" },
  {title:"Coding Forum", desc:"A forum platform using Php and Mysql for coding discussions.", link:"https://github.com/sanket122461/coding-forum"},
  {title:"Mini e-commerce website", desc:"A small e-commerce site using Php and Mysql.", link:"https://github.com/sanket122461/mini-e-commerce-website"},
  {title:"TODO List Application", desc:"A simple TODO List app using php and js.", link:"https://github.com/sanket122461/To-do"}
];

export default function Projects() {
  return (
    <section id="projects" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row">
          {projects.map((p, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>{p.title}</h5>
                  <p>{p.desc}</p>
                  <a href={p.link} className="btn btn-dark">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
