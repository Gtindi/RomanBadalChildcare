import './App.css';
import Header from './components/Header'
import Navigation from './components/Navigation';
import About from './components/About';
import Gallery from './components/Gallery';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Gallery />
      <Programs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
