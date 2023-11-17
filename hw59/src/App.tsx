import React from 'react';
import MovieList from './components/MovieList';
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <h1>Movies to watch</h1>
      <MovieList />
    </>
  );
};

export default App;