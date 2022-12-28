import "./App.css";
import Parent from "./components/Parent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Parent />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;