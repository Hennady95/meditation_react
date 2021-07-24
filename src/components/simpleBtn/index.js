import './style.css'

export const SimpleButton = ({text, width, height}) => {
    return <div className = "simple-btn" style = {{height: height, width: width}}>{text}</div>
}