import {Navigation} from './components/navigation'
import {Footer} from './components/footer'

import {MainPage} from './pages/mainPage'

function App() {
  return (
    <div className = "wrapper">
      <Navigation />
      <MainPage/>
      <Footer />
    </div>
  );
}

export default App;
