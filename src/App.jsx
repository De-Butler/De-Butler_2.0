import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage';
import TopBar from './components/topBar';
function App() {
  return (
    <>
    <TopBar/>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
    </>
  );
}

export default App;
