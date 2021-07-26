import '../../source/style/main.css'
import {SimpleButton} from '../simpleBtn'

export const TransformItem = ({img, title, text, leftPosition}) => {
    return <div className = {leftPosition ? "left-image" : "right-image"}>
        <img src = {img} alt = {title} className = "item-image"/>
        <div className>
            <p className = "item-title">{title}</p>
            {text.map(item => <p className = "item-text">{item}</p>)}
            <SimpleButton text = "Learn more" height = "55px" width = "210px"/>
        </div>
    </div>
}