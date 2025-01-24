import React from 'react';

const Skills = () => {
    return (
        <div className="skills">
            <header>
                <h2>My Skills</h2>
                <p>Here’s a breakdown of my technical skills. I am continuously learning and improving to stay up-to-date with the latest technologies.</p>
            </header>
            <section className="skill-category">
                <h3>Programming Languages</h3>
                <ul>
                    <li><strong>JavaScript:</strong> Experienced with building dynamic web applications using JavaScript, including ES6+ features.</li>
                    <li><strong>Python:</strong> Strong knowledge in Python for data analysis, machine learning, and automation tasks.</li>
                    <li><strong>HTML5 & CSS3:</strong> Proficient in building responsive, mobile-first websites with clean, semantic HTML and modern CSS techniques.</li>
                </ul>
            </section>

            <section className="skill-category">
                <h3>Web Development</h3>
                <ul>
                    <li><strong>React:</strong> Building dynamic, single-page applications with React, using hooks, state management, and component-based architecture.</li>
                    <li><strong>Node.js:</strong> Backend development using Node.js, including building REST APIs and working with databases.</li>
                </ul>
            </section>

           

            <section className="skill-category">
                <h3>Databases</h3>
                <ul>
                    <li><strong>MongoDB:</strong> Experience in NoSQL databases, designing schemas, and querying data in MongoDB.</li>
                    <li><strong>MySQL:</strong> Proficient in using MySQL for relational database management, including designing schemas, writing queries, and optimizing performance.</li>
                </ul>
            </section>

            <section className="skill-category">
                <h3>Tools & Technologies</h3>
                <ul>
                    <li><strong>Git & GitHub:</strong> Version control using Git and collaboration through GitHub for team-based development.</li>
                    <li><strong>AWS:</strong> Experience deploying applications and managing cloud resources using AWS services like EC2, S3, and RDS.</li>
                </ul>
            </section>

           
        </div>
    );
};

export default Skills;
