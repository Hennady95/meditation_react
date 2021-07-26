import '../../source/style/main.css'

export const AudioContainer = ({name,artist}) => {
    return <div className = "audio-cover">
        <div className = "cover-shadow">
            <div>
                <p className = "audio-name">{name}</p>
                <p className = "audio-artist">{artist}</p>
            </div>
            <button className = "playBtn"></button>
        </div>
    </div>
}