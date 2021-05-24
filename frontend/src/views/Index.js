import logo from '../assets/img/logo.png';
import '../assets/css/App.css';
import Footer from "../components/Footer/Footer";

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <img src={logo} className="logo" alt="logo" />
        <p>
          Bits N Bytes
        </p>
        <Link to="/register">Register</Link>

      </header>
      <Footer/>
    </div>
  );
}

export default App;
