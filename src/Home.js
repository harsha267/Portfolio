import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <header>
                <h2>Welcome to My Portfolio</h2>
                <p>Hello! I'm Harshavarshini, a passionate developer focused on creating impactful and innovative solutions.</p>
            </header>
            <section className="intro">
                <h3>About Me</h3>
                <p>
                    I specialize in building clean, modern web applications with React, JavaScript, and other cutting-edge technologies. With a deep interest in data science and machine learning, I also apply analytics and predictive models to solve complex problems. 
                    My goal is to continuously learn and evolve as a developer and deliver high-quality solutions that add value to users and organizations.
                </p>
                <p>
                    I'm constantly seeking new challenges and opportunities to grow, collaborate, and make a difference in the tech world.
                </p>
            </section>
            <section className="highlights">
                <h3>Key Highlights</h3>
                <ul>
                    <li>Proficient in front-end technologies like React, HTML, CSS, and JavaScript.</li>
                    <li>Experienced in back-end development with Node.js and Express.js.</li>
                    <li>Hands-on experience with machine learning models and data analysis techniques.</li>
                    <li>Collaborative and adaptable team player who enjoys problem-solving.</li>
                    <li>Constantly learning and exploring new tools and technologies.</li>
                </ul>
            </section>
            <section className="call-to-action">
                <h3>Let's Connect!</h3>
                <p>If you're interested in working together feel free to reach out. We will bring out better projects and impactful solutions in technology world</p>
                <a href="/contact" className="cta-button">Contact Me</a>
            </section>
        </div>
    );
};

export default Home;
