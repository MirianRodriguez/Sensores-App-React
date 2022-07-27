import './App.css';
import Navbar from './componentes/Navbar';
import Sensores from './componentes/Sensores';
import Mediciones from './componentes/Mediciones';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Navbar></Navbar> 

        <Routes>

        <Route exact path='/sensores' element={<Sensores/>}></Route>
  
        <Route exact path='/mediciones' element={<Mediciones/>}></Route>

        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
