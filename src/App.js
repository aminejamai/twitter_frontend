import logo from './logo.svg';
import './App.css';
import  Navbar  from './Components/Navbar';
import Parent from './Components/Parent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Parent />
    </div>
  );
}

export default App;
