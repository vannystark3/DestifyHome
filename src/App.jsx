import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NAVBAR from './components/navbar/navbar.jsx'
import HERO from './components/hero/hero.jsx'
import FEATURES from './components/features/features.jsx'
import TEAM from './components/team/team.jsx'
import ACHIEVEMENTS from './components/achievements/achievements.jsx'
import FOOTER from './components/footer/footer.jsx'

function App() {
  return (
    <>
      <NAVBAR/>
      <HERO/>
      <FEATURES/>
      <TEAM/>
      <ACHIEVEMENTS/>
      <FOOTER/>
    </>
  )
}

export default App
