import '../../source/style/main.css';

export const BurgerMenu = ({show}) => {

    return <div className = "burger-container" style = {show ? { width: '50%'} : { width: '0'}}>
        <ul className = "burger_menu">
            <li style = {show ? {opacity: 1} : {opacity: 0}}><a href = "/#">Home</a></li>
            <li style = {show ? {opacity: 1} : {opacity: 0}}><a href = "/#">Explore</a></li>
            <li style = {show ? {opacity: 1} : {opacity: 0}}><a href = "/#">Classes</a></li>
            <li style = {show ? {opacity: 1} : {opacity: 0}}><a href = "/#">About us</a></li>
            <li style = {show ? {opacity: 1} : {opacity: 0}}><a href = "/#">Privacy</a></li>
            <li style = {show ? {opacity: 1} : {opacity: 0}}><a href = "/#">Services</a></li>
        </ul>
    </div>
}