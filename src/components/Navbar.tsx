import { NavLink } from "react-router-dom";
import '../css/navbarStyle.css';
import { useEffect, useState } from "react";

function Navbar() {

    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setHidden(true); // Scrolling down
            } else {
                setHidden(false); // Scrolling up
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={hidden ? 'navbar hidden' : 'navbar'}>
            <img className='logo' src="./THS.png"></img>
            <div className="links">
                <a href="/#home"> Home </a>
                <a href="/#about-me"> About Me </a>
                <a href="/#projects"> Projects </a>
                <a href="/#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;