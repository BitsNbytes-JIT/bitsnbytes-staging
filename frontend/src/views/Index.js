import logo from '../logo.svg';
import '../assets/css/App.css';
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
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
      </header>
      <Footer/>
    </div>
  );
}

export default App;
