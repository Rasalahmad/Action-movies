
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';

function App() {
  return (
    <div className = 'main'>
      <Header></Header>
      <Movies></Movies>
      <Footer></Footer>
    </div>
  );
}

export default App;
