import './App.css';
import TopBar from './components/TopBar/TopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Banner />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
