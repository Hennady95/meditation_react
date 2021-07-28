import {Navigation} from './components/navigation'
import {Footer} from './components/footer'
import {BurgerMenu} from './components/burgerMenu'
import {MainPage} from './pages/mainPage'

import {useState} from 'react';
//import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'

function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className = "wrapper">
      <BurgerMenu show = {showMenu} setShow = {setShowMenu}/>
      <Navigation show = {showMenu} setShow = {setShowMenu}/>
      <MainPage/>
      <Footer />
    </div>
  );
}

export default App;
