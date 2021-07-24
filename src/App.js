import './App.css';
import meditation from './source/img/icon/meditation-icon.png'
import yoga from './source/img/icon/yoga-icon.png'
import sound from './source/img/icon/sound-icon.png'
import practice_img from './source/img/background/practice-background.png'
import musicGirls from './source/img/music-girls.png'
import twisted from './source/img/transform-girl_twisted.png'
import fitness from './source/img/transform-girl_fitness.png'

import {Navigation} from './components/navigation'
import {SimpleButton} from './components/simpleBtn'
import {Card} from './components/card'
import {AudioContainer} from './components/audioContainer'
import {SkillCard} from './components/skillCard'
import {Footer} from './components/footer'
import {TransformItem} from './components/transformItem'

function App() {
  return (
    <div className = "wrapper">
      <Navigation />
      <div className = "hero-section">
          <p className = "hero-section_title">Meditations helps you detoxify your body</p>
          <p className = "hero-section_text">“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout point of using Lorem Ipsum is that it has a more-or-less.”</p>
          <SimpleButton text = "Learn more" width = "300px" height = "75px" center/>
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
        <p className = "music_title">Take a Deep Breath</p>
        <p className = "music_text">“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.”</p>
        <div className = "audio-container">
            <div className = "audio">
              <AudioContainer name = "Turning off Auto Pilot" artist = "Intriduction, Strees Assesment"/>
              <AudioContainer name = "Turning off Auto Pilot" artist = "Intriduction, Strees Assesment"/>
              <AudioContainer name = "Turning off Auto Pilot" artist = "Intriduction, Strees Assesment"/>
            </div>
            <img src = {musicGirls} alt = "music meditation"/>
        </div>
      </div>
      <div className = "meditation">
        <p className = "meditation-title">The best of meditation</p>
        <p className = "meditation-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
        <div className = "meditation-skills">
            <SkillCard title = "The peace" text = "which of us ever undertakes laborious physical exercise, except to obtain some advantage from it." navigation = "left"/>
            <SkillCard title = "Relex  refresh" text = "The generated Lorem Ipsum is therefore always free from repetition, injected humour." navigation = "right"/>
            <SkillCard title = "Strength building" text = "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore." navigation = "left"/>
            <SkillCard title = "The peace" text = "which of us ever undertakes laborious physical exercise, except to obtain some advantage from it." navigation = "right"/>
            <SkillCard title = "TQuick relextion" text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." navigation = "left"/>
            <SkillCard title = "The peace" text = "which of us ever undertakes laborious physical exercise, except to obtain some advantage from it." navigation = "right"/>
        </div>
      </div>
      <div className = "transform">
        <p className = "transform-title">Transform your body, mind <span>and</span> life today</p>
        <p className = "transform-text">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos  sint occaecati cupiditate non provident.”</p>
        <TransformItem img = {twisted} title = "Antistrees meditation" text = {['There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected.','These cases are perfectly simple and easy to distinguish. In a free hour when our power of choice is untrammelled.']} leftPosition = {true}/>
        <TransformItem img = {fitness} title = "Backyark band meditation" text = {['To take a trivial example, which of us ever undertakes laborious physical exercise except to obtain some advantage from it...','The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.']} leftPosition = {false}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
