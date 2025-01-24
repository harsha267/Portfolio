import React from 'react';

const Projects = () => {
    return (
        <div className="projects">
            <header>
                <h2>My Projects</h2>
                <p>Below are some of the projects I have worked on. Each project reflects my passion for technology and problem-solving.</p>
            </header>
            <section className="project-list">
                <div className="project-item">
                    <h3>1. Predictive Model for Loan Approval</h3>
                    <p>
                        This project aimed to predict loan approval based on factors such as credit history, income level, and loan amount. Using machine learning algorithms such as Random Forest, I was able to create a predictive model that can be used by financial institutions to streamline their loan approval process and reduce risks.
                    </p>
                    <p><strong>Technologies used:</strong> Python, Scikit-learn, Pandas, NumPy, Jupyter Notebook</p>
                </div>

                <div className="project-item">
                    <h3>2. Personal Portfolio Website</h3>
                    <p>
                        I built this portfolio website to showcase my work and skills. The website is fully responsive, and I utilized React and modern web design techniques to create a user-friendly and visually appealing site. It highlights my technical expertise, my journey as a developer, and provides a way for people to get in touch with me.
                    </p>
                    <p><strong>Technologies used:</strong> React, JavaScript, CSS, HTML</p>
                </div>

                
                <div className="project-item">
                    <h3>3. E-commerce Website</h3>
                    <p>
                        I developed a fully functional e-commerce platform where users can browse products, add items to their cart, and proceed to checkout. This project enhanced my skills in full-stack development as I worked on both the front-end and back-end, integrating payment gateways and optimizing for performance.
                    </p>
                    <p><strong>Technologies used:</strong> React, Node.js, Express, MongoDB</p>
                </div>
            </section>
        </div>
    );
};

export default Projects;
