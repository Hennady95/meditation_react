import '../../source/style/main.css'

export const SimpleButton = ({text, width, height, center}) => {
    return <button className = {`simple-btn ${center && 'center'}`} style = {{height: height, width: width}}>{text}</button>
}