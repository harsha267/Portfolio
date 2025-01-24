import React from 'react';

const About = () => {
    return (
        <div className="about">
            <header>
                <h2>About Me</h2>
                <p>Hi, I'm Harshavarshini a passionate developer and lifelong learner. Welcome to my portfolio!</p>
            </header>
            <section className="bio">
                <h3>My Journey</h3>
                <p>
                    I started my journey in the world of technology with a curiosity about how things work. After diving into coding, I found my passion in web development and data science.  My aim is to build impactful solutions that not only solve problems but also provide users with meaningful experiences.
                </p>
            <p>
                    With a foundation in computer science, I continuously trying to expand my skill set to stay up to date with the latest technologies and methodologies in the industry.
            </p>
            </section>
            <section className="skills">
                <h3>Skills & Expertise</h3>
                <ul>
                <li><strong>Programming Languages:</strong> JavaScript, Python, HTML, CSS</li>
                    <li><strong>Frameworks & Libraries:</strong> React, Node.js, Express, Django</li>
                    <li><strong>Data Science & Machine Learning:</strong> Pandas, NumPy, Scikit-Learn, TensorFlow</li>
                    <li><strong>Databases:</strong> MongoDB, MySQL</li>
                    <li><strong>Version Control:</strong> Git, GitHub</li>
                    
                </ul>
            </section>
            <section className="future-goals">
                <h3>Looking Ahead</h3>
                <p>
                    As a developer, I am always looking for new challenges that will help me grow. My future goals include expanding my knowledge in machine learning and artificial intelligence, contributing to open-source projects, and collaborating with teams to build innovative solutions.
                </p>
                <p>
                    I believe that with hard work, persistence, and a willingness to learn, anything is possible. I’m excited about the future and look forward to making a positive impact in the tech industry.
                </p>
            </section>
        </div>
    );
};

export default About;
