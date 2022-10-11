import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPost from './AddPost';
import LandingPage from './LandingPage';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add" element={<AddPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
