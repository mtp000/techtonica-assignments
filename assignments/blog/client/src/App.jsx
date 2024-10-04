import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';

function App() {
  //recieve search term from Search bar in Header
  // contain state with array of all articles/posts to be passed down to Filterable Posts List

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    
    </>
  )
    
};

export default App;
