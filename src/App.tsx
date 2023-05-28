import React, { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { useAppDispatch } from './hook/redux';
import { AirPortDetailPage } from './pages/AirPortDetailPage';
import { AuthPage } from './pages/AuthPage';
import { MainPage } from './pages/MainPage';
import { fetchHandBooks } from './store/actions/handBookActions';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHandBooks());
  }, [dispatch])
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
