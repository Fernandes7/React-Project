import './App.css';
import Project from './Component1/Project';
import Project1 from './Component2/Project';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/project1" element={<Project />} />
        <Route path="/project2" element={<Project1 />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
