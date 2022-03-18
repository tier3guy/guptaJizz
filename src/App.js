import { Route, Routes } from 'react-router';

import './App.css';
import Navbar from './Components/JSX/Navbar.jsx';
import Home from './Components/JSX/Home.jsx';
import Footer from './Components/JSX/Footer';
import Orders from './Components/JSX/Orders';
import About from './Components/JSX/About';
import Menu from './Components/JSX/Menu';
import ErrorPage from './Components/JSX/404';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/order" element = {<Orders/>}/>
          <Route exact path = "/about" element = {<About/>}/>
          <Route exact path = "/menu" element = {<Menu/>}/>
          <Route path = "*" element = {<ErrorPage/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}


export default App;
