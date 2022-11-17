import logo from "./logo.svg";
import Footer from "./components/Footer";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      <HomePage />

      {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>牛蛙，您run起来了!</p>
    </header> */}

      <Footer />
    </div>
  );
}

export default App;
