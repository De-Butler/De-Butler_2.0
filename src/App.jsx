import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage';
import TopBar from './components/topBar';
import Contact from './pages/contact';
import ActivityPage from './pages/activityPage';
import AboutPage from './pages/aboutPage';
import Footer from '../src/components/footer';
import HistoryPage from './pages/historyPage';

function App() {
  return (
    <div className='h-fit w-full'>
      <TopBar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path='/history' element={<HistoryPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
