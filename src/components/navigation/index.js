import '../../source/style/main.css'

export const Navigation = () => {
    return <div className = "navigation">
        <a><span className = "logo"></span></a>
        <ul className = "navigation-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>Classes</li>
            <li>About us</li>
            <li>Privacy</li>
            <li>Services</li>
        </ul>
        <div className = "hamburger"><span className = "line"></span></div>
    </div>
}