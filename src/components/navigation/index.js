import '../../source/style/main.css'

export const Navigation = ({show,setShow}) => {
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
        <div className = "hamburger" onClick = {() => setShow(!show)}><span className = {`${show ? 'line active' : 'line'}`}></span></div>
    </div>
}