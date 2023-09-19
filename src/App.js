import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Review from './components/Review';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Menu />
      <div id='content'>
        <Home />
        <About />
        <Products />
        <Review />
        <Contact />
      </div>
    </div>
  );
}

export default App;
