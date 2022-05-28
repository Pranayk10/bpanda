import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Mainbody from "./Components/Mainbody";
import Digimark from "./Components/Digimark";
function App() {
  return (
    <>
    <Header/>
    <Router>
        <Routes>
          <Route exact path="/Header" element={<Header/>} />
          <Route path="/Mainbody" element={<Mainbody/>}/>
          <Route path="/Digimark" element={<Digimark/>}/>
           </Routes>
      </Router>
    </>
  );
}

export default App;
