import '../css/footerStyle.css';

function Footer() {
    return (
        <footer id='contact'>
            <div className='left'>
                <div className="top">
                    <h6 className="get-in-contact"> Get in Contact! </h6>
                    <a href="mailto:thwinhanshin123@gmail.com" className="email"> thwinhanshin123@gmail.com </a>
                    <a href="tel:+959783387458" className="phone">(+95)9783387458</a>
                </div>
                <div className="icons">
                    <a href="mailto:thwinhanshin123@gmail.com" className="fa-regular fa-at"></a>
                    <a href="tel:+959783387458" className="fa-solid fa-phone"></a>
                    <a href="https://www.linkedin.com/in/thwin-han-shin-44b157334/?isSelfProfile=true" className="fa-brands fa-linkedin-in"></a>
                </div>
            </div>
            <div className="footer-logo">
                <img src='./footer-logo.png'></img>
            </div>
        </footer>
    );
}

export default Footer;