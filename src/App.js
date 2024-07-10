import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Home from './Pages/Home';
import Routers from './Routes';
function App() {
  return (
    <div className="App">
    {/* <Header />
    <Home /> */}
    <Routers />
    </div>
  );
}

export default App;
