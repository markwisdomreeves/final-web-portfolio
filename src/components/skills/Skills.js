import React from 'react';
import "./skills.css";


const Skills = () => {
  return (
    <section className="main_skills_container global_style_container_box">
      <div className="inner_skills_container">

        <div className="skills_title_box skills">
          <h1>Technical Skills</h1>
          <div className="border_line"></div>
        </div>

        <div className="skills_content_box">
          <div className="skills_items_box">
            <div className="skill color_one tooltip">
             <li>Html5</li>
             <span className="tool_tip_text">Frontend</span>
            </div>
            <div className="color_one tooltip">
              <li>Css3</li>
              <span className="tool_tip_text">Frontend</span>
            </div>
            <div className="color_one tooltip">
             <li>BootStrap</li>
             <span className="tool_tip_text">Frontend</span>
            </div>
            <div className="color_one tooltip">
             <li>Scss</li>
             <span className="tool_tip_text">Frontend</span>
            </div>
            <div className="color_one tooltip">
              <li>Git</li>
              <span className="tool_tip_text">Version Control</span>
            </div>
            <div className="color_one tooltip">
              <li>Github</li>
              <span className="tool_tip_text">Web Based Version Control</span>
            </div>
            <div className="color_two tooltip">
             <li>Javascript ES5+</li>
             <span className="tool_tip_text">Frontend</span>
            </div>
            <div className="color_two tooltip">
              <li>jQuery</li>
              <span className="tool_tip_text">Frontend</span>
            </div>
            <div className="color_two tooltip">
             <li>ReactJS</li>
             <span className="tool_tip_text">Frontend</span>
            </div>
            <div className="color_two tooltip">
             <li>Redux</li>
             <span className="tool_tip_text">State Management</span>
            </div>
            <div className="color_two tooltip">
              <li>NodeJS</li>
              <span className="tool_tip_text">Backend</span>
            </div>
            <div className="color_two tooltip">
             <li>ExpressJS</li>
             <span className="tool_tip_text">Backend</span>
            </div>
            <div className="color_two tooltip">
              <li>MongoDB</li>
              <span className="tool_tip_text">Database</span>
            </div>
            <div className="color_two tooltip">
              <li>NextJS</li>
              <span className="tool_tip_text">Frontend</span>
            </div>
            <div className="color_one tooltip">
              <li>Webpack</li>
              <span className="tool_tip_text">Module Bundler</span>
            </div>
            <div className="color_one tooltip">
             <li>Npm</li>
             <span className="tool_tip_text">Node Package Manager</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills;
