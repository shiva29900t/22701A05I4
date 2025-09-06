
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RedirectPage from './pages/RedirectPage';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:shortCode" element={<RedirectPage />} />
          </Routes>
        </HashRouter>
      </main>
    </div>
  );
};

export default App;
