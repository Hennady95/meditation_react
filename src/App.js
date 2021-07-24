import './App.css';
import meditation from './source/img/icon/meditation-icon.png'
import yoga from './source/img/icon/yoga-icon.png'
import sound from './source/img/icon/sound-icon.png'
import practice_img from './source/img/background/practice-background.png'

import {Navigation} from './components/navigation'
import {SimpleButton} from './components/simpleBtn'
import {Card} from './components/card'

function App() {
  return (
    <div className = "wrapper">
      <Navigation />
      <div className = "hero-section">
          <p className = "hero-section_title">Meditations helps you detoxify your body</p>
          <p className = "hero-section_text">“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout point of using Lorem Ipsum is that it has a more-or-less.”</p>
          <SimpleButton text = "Learn more" width = "300px" height = "75px"/>
      </div>
      <div className = "main-menu">
        <Card icon = {meditation} title = "Meditation" text = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."/>
        <Card icon = {yoga} title = "Yoga" text = " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
        <Card icon = {sound} title = "Sound" text = " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing."/>
      </div>
      <div className = "practice">
        <p className = "practice_title">Practice Wherever You Want, Whenever You Need</p>
        <p className = "practice_text">“These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.”</p>
        <div className = "practice_list_container">
          <img src = {practice_img} alt = "plastic_girl"/>
          <ul className = "practice_list">
            <li>
              <p className = "practice_list_title">Meditation wind</p>
              <p className = "practice_list_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected.</p>
            </li>
            <li>
              <p className = "practice_list_title">Strees reduction</p>
              <p className = "practice_list_text">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally can procure him some great pleasure.</p>
            </li>
            <li>
              <p className = "practice_list_title">Self compassion</p>
              <p className = "practice_list_text">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
            </li>
          </ul>
        </div>
      </div>
      <div className = "music">
        
      </div>
    </div>
  );
}

export default App;
