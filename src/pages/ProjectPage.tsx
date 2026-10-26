import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/projectPageStyle.css";
import LogoProject from "../components/LogoProject";
import UIXProject from "../components/UIXProject";
import { ProjectPageState } from "../types/ProjectTypes";

function ProjectPage() {

    // variables
    const location = useLocation();
    const { title, projects } = location.state as ProjectPageState;

    return (
        <>
            <Navbar></Navbar>

            <section className="project-page">
                <h2 className="title">{title}</h2>
                <div className="projects">
                    {title === "Logofolio" &&
                        projects.map((project, index) => {
                            if ("logo" in project) {
                                return (
                                    <LogoProject
                                        key={index}
                                        logo={project.logo}
                                        mockup1={project.mockup1}
                                        mockup2={project.mockup2}
                                    />
                                );
                            }

                            return null;
                        })
                    }
                    {(title === "Social Media" || title === "Posters") &&
                        projects.map((project, index) => {
                            if ("image" in project) {
                                return (
                                    <div key={index} className="image-container">
                                        <img src={project.image} alt={project.alt} />
                                    </div>
                                )
                            }
                            return null;
                        })
                    }
                    {title === "UI/UX" && 
                        projects.map((project, index) => {
                            if("thumbnail" in project) {
                                return (
                                    <UIXProject
                                        key={index}
                                        thumbnail={project.thumbnail}
                                        name={project.name}
                                    />
                                )
                            }
                            return null;
                        })
                    }
                </div>
            </section>

            <Footer></Footer>
        </>
    );
};

export default ProjectPage;