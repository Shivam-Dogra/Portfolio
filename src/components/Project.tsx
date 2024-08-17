import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/phoneIntellect.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Shivam-Dogra/MobilePlanPriceAnalysis" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shivam-Dogra/MobilePlanPriceAnalysis" target="_blank" rel="noreferrer"><h2>Phone Intellect</h2></a>
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