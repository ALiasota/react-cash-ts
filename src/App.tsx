import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AirPortDetailPage } from './pages/AirPortDetailPage';
import { AuthPage } from './pages/AuthPage';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/airport/:id' element={<AirPortDetailPage />} />
      </Routes>
    </>
    
  );
}

export default App;
