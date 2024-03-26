
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddTerminPacijent from './users/AddTerminPacijent';
import { Registracija } from './pages/Registracija';
import { Login } from './pages/Login';
import { LoginZubar } from './pages/LoginZubar';
import HomePacijent from './pages/HomePacijent';
import NavbarZubar from './layout/NavbarZubar';
import NavbarLogin from './layout/NavbarLogin';
import { AddTerminZubar } from './users/AddTerminZubar';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/home" element={<><NavbarZubar/><Home/></>}/>
            <Route exact path="/homePacijent" element={<><Navbar/> <HomePacijent/></>}/>
            <Route exact path="/" element={<><NavbarLogin/> <Login/></>}/>
            <Route exact path="/logInZubar" element={<><NavbarLogin/> <LoginZubar/></>}/>
            <Route exact path="/registracija" element={<><NavbarLogin/> <Registracija/></>}/>
            <Route exact path="/zakazivanjeZubar" element={<><NavbarLogin/> <AddTerminZubar/></>}/>
            <Route exact path="/zakazivanje" element={<><Navbar/> <AddTerminPacijent/></>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
