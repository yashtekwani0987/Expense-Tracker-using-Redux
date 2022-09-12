import './App.css';
import Add from './components/Add';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>

    <Routes>
      <Route exact path='/' element={<Home key='home'/>}/>
      <Route exact path='/add' element={<Add key='add'/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
