import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Servizi from './components/Servizi';
import Portfolio from './components/Portfolio';
import Clienti from './components/Clienti';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Servizi />
      <Portfolio />
      <Clienti />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
