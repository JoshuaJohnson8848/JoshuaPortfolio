import './App.css';
import TopBar from './Components/TopBar/TopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
