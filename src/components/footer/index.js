import '../../source/style/main.css';

export const Footer = () => {
    return <div className = "footer">
        <a><span className = "logo"></span></a>
        <ul className = "footer-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>Classes</li>
            <li>About us</li>
            <li>Privacy</li>
            <li>Services</li>
        </ul>
        <ul className = "social-link">
            <li><span className = "social-icon"></span></li>
            <li><span className = "social-icon"></span></li>
            <li><span className = "social-icon"></span></li>
        </ul>
    </div>
}