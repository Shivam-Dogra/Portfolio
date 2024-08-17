import React from "react";
import '../assets/styles/Expertise.scss';
import ACC from "../assets/images/ACC.jpg";
import EP from "../assets/images/EP-Presentation.jpg";




function Blog() {
    return (
    <div className="container" id="Blog">
        <div className="skills-container">
            <h1>Blog</h1>
            <div className="skills-grid">
                <div className="skill">
                    <h3>PhoneIntellect: Showcased at the 9th CS Demo Day 2024</h3>
                    <img src={ACC} alt="10th CS Demo Day 2024" />
                    <p>🚀 <strong>Exciting News!</strong> 🚀</p>

<p><strong>PhoneIntellect</strong> was featured at the 9th CS Demo Day 2024, held at the University of Windsor! 🌟 This event showcases the best and brightest projects in Computer Science, and we are honored to be among the top 50! 🎉</p>

<p><strong>PhoneIntellect</strong> is a comprehensive mobile plan analysis tool, combining a powerful <strong>Spring Boot</strong> backend with a dynamic <strong>React</strong> frontend. The backend, built using <strong>Java</strong> and <strong>Spring Boot</strong>, handles everything from web scraping to advanced data processing, ensuring users get accurate and up-to-date information. The frontend, developed with <strong>React</strong>, provides an intuitive and visually appealing interface, making it easy for users to compare mobile plans. 📱✨</p>

<p>A special shoutout to <strong>Professor Dr. Olena Syrotkina</strong> 🙌 for recommending our project and guiding us through the process. Her mentorship was invaluable, and we couldn't have reached this milestone without her support. 🌟</p>

                </div>

                <div className="skill">
                    <h3>UniRoommates: Paradigms in Computing Tech</h3>
                    <img src={EP} alt="EP project presentation" />
                    <p>🎓 As we wrap up the Summer 2024 term at the University of Windsor, I'm thrilled to announce the successful development of UniRoommates, guided by Professor Pooya Moradian Zadeh. This innovative solution addresses a pressing challenge for international students—finding the ideal roommate. 🌍 International students arriving in Canada each year face the daunting task of securing a living situation that aligns with both their academic and personal needs. This process can often feel overwhelming and complex. 🔍</p>

<p>To tackle this issue, "UniRoommate" is created. This platform is designed to simplify the search for compatible roommates among international students in Windsor, making the process easy and personalized. 👥</p>

<p>UniRoommate boasts several key features, including a custom roommate search that matches students based on their study programs and lifestyle preferences. The platform ensures secure key-based authentication to protect user data and offers detailed personal profiles for informed decision-making. Additionally, it facilitates group management with unique access keys and encourages community engagement through local event discovery in Windsor. 💻</p>

<p>I am incredibly proud of how we've utilized advanced technology to enhance student life, making the transition smoother for international students while fostering a sense of community and belonging 🤝</p>


                    
                </div>

            </div>
        </div>
    </div>
    );
}

export default Blog;