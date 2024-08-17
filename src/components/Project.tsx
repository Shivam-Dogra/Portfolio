import React from "react";
import mock07 from '../assets/images/socketProgramming.png';
import mock08 from '../assets/images/UniRoommates.png';
import mock10 from '../assets/images/phoneintellect.png';
import mock09 from '../assets/images/GoTravelFrance.png'; 
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Shivam-Dogra/MobilePlanPriceAnalysis" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shivam-Dogra/MobilePlanPriceAnalysis_Frontend/tree/shivam" target="_blank" rel="noreferrer"><h2>Phone Intellect</h2></a>
                <p>Implemented a comprehensive mobile plan comparison platform using React for frontend and Spring Boot for backend to compare mobile plans from Rogers, Bell and Freedom Mobile on basis of price, data allowance, network coverage and additional features.</p> 
            </div>
            <div className="project">
                <a href="https://github.com/Shivam-Dogra/GoTravelFrance" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shivam-Dogra/GoTravelFrance" target="_blank" rel="noreferrer"><h2>Go Travel France</h2></a>
                <p>Goal of this project is to enhance tourism experience with an innovative Scavenger Hunt feature recommending hidden gems across France. Built with React Native for seamless user experience and Node.js with Express for efficient server-side operations.</p> </div>
            <div className="project">
                <a href="https://github.com/Shivam-Dogra/UW_RoommateFinder" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shivam-Dogra/UW_RoommateFinder" target="_blank" rel="noreferrer"><h2>UniRoomMateFinder</h2></a>
                <p>UniRoomMates is a cutting-edge platform designed to streamline the roommate-finding process for international students in Canada. It connects students across different academic levels—undergraduate, graduate, and PhD—enabling them to share living spaces and integrate into local communities through shared interests and events. The application provides a secure, dynamic environment where users can create detailed profiles, explore potential roommates, join interest groups, and discover local events in Windsor.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shivam-Dogra/DistributedFileSystem" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shivam-Dogra/DistributedFileSystem" target="_blank" rel="noreferrer"><h2>Distributed File System</h2></a>
                <p>This project implements a Distributed File System using socket programming. The system comprises three servers—Smain, Spdf, and Stext—and supports multiple client connections. Clients can upload, download, delete, and manage files through the Smain server, which coordinates with Spdf and Stext servers for handling .pdf and .txt files respectively.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;