import '../../source/style/main.css'

export const Navigation = ({show,setShow}) => {
    return <div className = "navigation">
        <a href = "/#"><span className = "logo">Meditation</span></a>
        <ul className = "navigation-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>Classes</li>
            <li>About us</li>
            <li>Privacy</li>
            <li>Services</li>
        </ul>
        <div className = "hamburger" onClick = {() => {
            setShow(!show);
            document.getElementsByTagName('body')[0].style.overflow = show ? 'auto' : 'hidden';
            }}><span className = {`${show ? 'line active' : 'line'}`}></span>
        </div>
    </div>
}