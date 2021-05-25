import logo from '../assets/img/logo.png';
import '../assets/css/App.css';
import Footer from "../components/Footer/Footer";
import { TextField } from '@material-ui/core';
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <img src={logo} className="logo" alt="logo" />
        <p>
          Bits N Bytes
        </p>
        <a
          className="App-link"
          href="https://forms.gle/dn1KaKcrtewguxj57"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Register here
        </a>
        <TextField id="standard-basic" label="Standard" />
      </header>
      <Footer/>
    </div>
  );
}

export default App;
