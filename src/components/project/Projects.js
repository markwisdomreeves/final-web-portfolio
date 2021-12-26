/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import BlogImage from "../../images/blog-project-img-1.png";
import ExpenseImage from "../../images/expense-tracker-project-img.png";
import Project3 from "../../images/project-img-3.jpg";
import "./projects.css";


const Projects = () => {
  return (
    <div className="main_projects_container global_style_container_box">
      <div className="inner_projects_container">

        <div className="projects_title_box projects">
          <h1>Recent Projects</h1>
          <div className="border_line"></div>
        </div>

        <div className="projects_content_box">

          <div className="projects_container_one">
            <a href="https://pow-1.netlify.app/" rel="noreferrer" target="_blank">
              <img src={BlogImage} alt="" />
            </a>
            <div className="project_items_box">
              <a href="https://pow-1.netlify.app/" rel="noreferrer" target="_blank">
                <h3>Pool of Writers' Website</h3>
              </a>
              <p>
                The Pool of Writers website is owned by a small group of writers.
                Technologies used to developed this project are Tailwind css, React,
                Redux, Jwt Authentication, Node, Express, & Mongodb.
              </p>
              <div className="project_links_box">
                <a href="https://pow-1.netlify.app/" rel="noreferrer" target="_blank">
                  View Project
                </a>
                <a href="https://github.com/markwisdomreeves/pow_blog_website" rel="noreferrer" target="_blank">
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="projects_container_one">
            <a href="https://expense-o.netlify.app/" rel="noreferrer" target="_blank">
              <img src={ExpenseImage} alt="" />
            </a>
            <div className="project_items_box">
              <a href="https://expense-o.netlify.app/" rel="noreferrer" target="_blank">
                <h3>Expense Tracker App</h3>
              </a>
              <p>
                This App allows users to manage their flow of incomes and expenses in one dashboard.
                Technologies used to developed this project are bootstrap, React,
                Redux, Node, Express, Jwt Authentication, & Mongodb.
              </p>
              <div className="project_links_box">
                <a href="https://expense-o.netlify.app/" rel="noreferrer" target="_blank">
                  View Project
                </a>
                <a href="https://github.com/markwisdomreeves/expense-manager-web-app" rel="noreferrer" target="_blank">
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="projects_container_one">
            <a href="https://real-estate-h.herokuapp.com/" rel="noreferrer" target="_blank">
              <img src={Project3} alt="" />
            </a>
            <div className="project_items_box">
            <a href="https://real-estate-h.herokuapp.com/" rel="noreferrer" target="_blank">
              <h3>Real Estate Website</h3>
            </a>
              <p>
                A Real Estate website that allows users to purchase properties online.
                Technologies used to developed this project are CSS, React, Redux, Jwt Authentication, Node & Express, Mongodb.
              </p>
              <div className="project_links_box">
                <a href="https://real-estate-h.herokuapp.com/" rel="noreferrer" target="_blank">
                  View Project
                </a>
                <a href="https://github.com/markwisdomreeves/real-estate-project" rel="noreferrer" target="_blank">
                  Source Code
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


export default Projects;
