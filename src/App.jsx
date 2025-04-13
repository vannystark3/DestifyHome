import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NAVBAR from './components/navbar/navbar'
import HERO from './components/hero/hero'
import FEATURES from './components/features/features'
import TEAM from './components/team/team'
import ACHIEVEMENTS from './components/achievements/achievements'
import FOOTER from './components/footer/footer'

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
