import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import AccountList from './components/AccountList';
import AddAccount from './components/AddAccount';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<AccountList />} />
        <Route path="/add-account" element={<AddAccount />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;