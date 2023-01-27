import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Banner />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
