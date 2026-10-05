import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

import EnglishGeneralPage from './pages/EnglishGeneralPage';
import EnglishWorldPage from './pages/EnglishWorldPage';
import EnglishNationPage from './pages/EnglishNationPage';
import EnglishBusinessPage from './pages/EnglishBusinessPage';
import EnglishTechnologyPage from './pages/EnglishTechnologyPage';
import EnglishEntertainmentPage from './pages/EnglishEntertainmentPage';
import EnglishSportsPage from './pages/EnglishSportsPage';
import EnglishSciencePage from './pages/EnglishSciencePage';
import EnglishHealthPage from './pages/EnglishHealthPage';
import HindiGeneralPage from './pages/HindiGeneralPage';
import HindiWorldPage from './pages/HindiWorldPage';
import HindiNationPage from './pages/HindiNationPage';
import HindiBusinessPage from './pages/HindiBusinessPage';
import HindiTechnologyPage from './pages/HindiTechnologyPage';
import HindiEntertainmentPage from './pages/HindiEntertainmentPage';
import HindiSportsPage from './pages/HindiSportsPage';
import HindiSciencePage from './pages/HindiSciencePage';
import HindiHealthPage from './pages/HindiHealthPage';
import GujaratiGeneralPage from './pages/GujaratiGeneralPage';
import GujaratiWorldPage from './pages/GujaratiWorldPage';
import GujaratiNationPage from './pages/GujaratiNationPage';
import GujaratiBusinessPage from './pages/GujaratiBusinessPage';
import GujaratiTechnologyPage from './pages/GujaratiTechnologyPage';
import GujaratiEntertainmentPage from './pages/GujaratiEntertainmentPage';
import GujaratiSportsPage from './pages/GujaratiSportsPage';
import GujaratiSciencePage from './pages/GujaratiSciencePage';
import GujaratiHealthPage from './pages/GujaratiHealthPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path='/' element={<Navigate to="/english/general" replace />} />
          <Route path='/english/general' element={<EnglishGeneralPage />} />
          <Route path='/english/world' element={<EnglishWorldPage />} />
          <Route path='/english/nation' element={<EnglishNationPage />} />
          <Route path='/english/business' element={<EnglishBusinessPage />} />
          <Route path='/english/technology' element={<EnglishTechnologyPage />} />
          <Route path='/english/entertainment' element={<EnglishEntertainmentPage />} />
          <Route path='/english/sports' element={<EnglishSportsPage />} />
          <Route path='/english/science' element={<EnglishSciencePage />} />
          <Route path='/english/health' element={<EnglishHealthPage />} />
          <Route path='/hindi/general' element={<HindiGeneralPage />} />
          <Route path='/hindi/world' element={<HindiWorldPage />} />
          <Route path='/hindi/nation' element={<HindiNationPage />} />
          <Route path='/hindi/business' element={<HindiBusinessPage />} />
          <Route path='/hindi/technology' element={<HindiTechnologyPage />} />
          <Route path='/hindi/entertainment' element={<HindiEntertainmentPage />} />
          <Route path='/hindi/sports' element={<HindiSportsPage />} />
          <Route path='/hindi/science' element={<HindiSciencePage />} />
          <Route path='/hindi/health' element={<HindiHealthPage />} />
          <Route path='/gujarati/general' element={<GujaratiGeneralPage />} />
          <Route path='/gujarati/world' element={<GujaratiWorldPage />} />
          <Route path='/gujarati/nation' element={<GujaratiNationPage />} />
          <Route path='/gujarati/business' element={<GujaratiBusinessPage />} />
          <Route path='/gujarati/technology' element={<GujaratiTechnologyPage />} />
          <Route path='/gujarati/entertainment' element={<GujaratiEntertainmentPage />} />
          <Route path='/gujarati/sports' element={<GujaratiSportsPage />} />
          <Route path='/gujarati/science' element={<GujaratiSciencePage />} />
          <Route path='/gujarati/health' element={<GujaratiHealthPage />} />
          <Route path='*' element={<Navigate to="/english/general" replace />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
