import '../../source/style/main.css'

export const SkillCard = ({title, text, navigation}) => {
    return <div className = {navigation === 'left' ? "skill-card-left" : "skill-card-right" }>
        <p className = "skill-title">{title}</p>
        <p className = "skill-text">{text}</p>
    </div>
}