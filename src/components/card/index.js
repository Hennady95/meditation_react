import './style.css'
import {SimpleButton} from '../simpleBtn'

export const Card = ({icon, title, text}) => {
    return <div className = "card">
        <img className = "menu-icon" src={icon} alt = {title}></img>
        <p className = "card-text">{text}</p>
        <SimpleButton text = "Learn More" height = "55px" width = "210px"/>
    </div>
}