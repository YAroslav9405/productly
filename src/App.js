
import './App.scss';
import './scss/main.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero-section/Hero';
import Design from './components/Design/Design';
import Professionals from './components/Professionals/Professionals';
import Managers from './components/Managers/Managers';
import Marketers from './components/Marketers/Marketers';
import Footer from './components/Footer/Footer';


function App() {
  return (
      <div>
        <Header/>
        <main>
          <Hero/>
          <Design/>
          <Professionals/>
          <Managers/>
          <Marketers/>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
