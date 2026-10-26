import Footer from "./Footer";
import Navbar from "./Navbar";
import "../css/projectStyle.css";

function LogoProject({ logo, mockup1, mockup2 }: LogoProject) {
    return (
        <div className="logo-Project">
            <div className="cropped-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="flex-container">
                <div className="cropped-mockup">
                    <img src={mockup1} alt="Mockup 1" />
                </div>
                <div className="cropped-mockup">
                    <img src={mockup2} alt="Mockup 2" />
                </div>
            </div>
        </div>
    )
}

export default LogoProject;