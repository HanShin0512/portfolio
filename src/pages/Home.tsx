import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../css/homeStyle.css';
import { ImageOnlyProj, LogoProject, Project, UIXProject } from '../types/ProjectTypes';
import { useEffect } from 'react';


function Home() {

    const logoProjects: LogoProject[] = [
        {
            logo: "/Logofolio/NekoChaya/Logo.png",
            mockup1: "/Logofolio/NekoChaya/mockup1.jpeg",
            mockup2: "/Logofolio/NekoChaya/mockup2.jpg"
        },
        {
            logo: "/Logofolio/AyeSayMart/logo.png",
            mockup1: "/Logofolio/AyeSayMart/mockup1.png",
            mockup2: "/Logofolio/AyeSayMart/mockup2.jpg"
        },
        {
            logo: "/Logofolio/WintReview/logo.png",
            mockup1: "/Logofolio/WintReview/mockup1.png",
            mockup2: "/Logofolio/WintReview/mockup2.png"
        },
        {
            logo: "/Logofolio/WinnieKopi/logo.png",
            mockup1: "/Logofolio/WinnieKopi/mockup1.jpg",
            mockup2: "/Logofolio/WinnieKopi/mockup2.jpg"
        }
    ];

    const socialProjects: ImageOnlyProj[] = [
        {
            image: "/SocialMedia/Razer.png",
            alt: "Razer discount"
        },
        {
            image: "/SocialMedia/NovaLoop.png",
            alt: "Nova Loop"
        }
    ];

    const uiuxProjects: UIXProject[] = [
        {
            thumbnail: "https://images.pexels.com/photos/40194592/pexels-photo-40194592.jpeg",
            name: "Mobile App Design",
        },
        {
            thumbnail: "https://images.pexels.com/photos/40194592/pexels-photo-40194592.jpeg",
            name: "Mobile App Design",
        },
    ];

    const posterProjects: ImageOnlyProj[] = [
        {
            image: "/Posters/After.png",
            alt: "someting wong"
        },
    ];

    // variables
    const navigate = useNavigate();
    
    // functions
    const navigateProjects = (title: string, projects: Project[]) => {
        navigate("/ProjectPage", {
            state: {
                title,
                projects
            }
        });
    };

    return (
        <>
            <Navbar></Navbar>
            {/* hero section */}
            <section id='home' className='hero-section'>
                <div className='hero-title'>
                    <h1 className='welcome'> Welcome to My </h1>
                    <h1 className='portfolio'> Portfolio </h1>
                </div>
                <div className='sub-title'>
                    <p> TECHNICAL </p>
                    <p> & </p>
                    <p> CREATIVE </p>
                </div>
                <div className='name-card'>
                    <img src='./NameCard.png'></img>
                </div>
            </section>

            {/* about me section */}
            <section id='about-me' className='about-me'>
                <p> Hi, my name is <span className='name'> Thwin Han Shin </span> </p>
                <p> I am technical and creative with a passion for frontend development and digital design. I enjoy combining logic with creativity to create visually appealing and engaging digital experiences. With coding and Figma skills, I bring both technical thinking and an eye for design to everything I do. </p>

                <div className='me'>
                    <img src='./me.jpg'></img>
                </div>

                <div className='qualifications'>
                    <div className='education'>
                        <p> Education </p>
                        <ul>
                            <li> <b> Bachelor's Degree in Computer Science </b> - University of Wollongong </li>
                            <li> <b> Diploma in IT </b> - Singapore Institute of Management </li>
                            <li> <b> HND Foundation Diploma </b> - Gusto University </li>
                        </ul>
                    </div>
                    <div className='skills'>
                        <p> Technical Skills </p>
                        <ul>
                            <li> HTML, CSS & JavaScript </li>
                            <li> React.js </li>
                            <li> Figma, Canva </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* projects section */}
            <section id='projects' className='projects-section'>
                <h2 className='projects-title'> Projects </h2>
                <div className="navigators">
                    <button
                        className='logofolio'
                        onClick={() => navigateProjects("Logofolio", logoProjects)}
                    >
                        Logofolio
                    </button>

                    <button
                        className='social-media'
                        onClick={() => navigateProjects("Social Media", socialProjects)}
                    >
                        Social Media
                    </button>

                    <button
                        className='uix'
                        onClick={() => navigateProjects("UI/UX", uiuxProjects)}
                    >
                        UI/UX
                    </button>

                    <button
                        className='posters'
                        onClick={() => navigateProjects("Posters", posterProjects)}
                    >
                        Posters
                    </button>
                </div>
            </section>

            {/* footer */}
            <Footer></Footer>
        </>
    )
}

export default Home;