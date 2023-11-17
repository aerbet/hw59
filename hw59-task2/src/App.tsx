import React, { useState, useEffect } from 'react';
import Joke from './components/Joke';
import JokeButton from './components/JokeButton';
import './App.css'

const App: React.FC = () => {
  const [joke, setJoke] = useState<string>('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <Joke joke={joke} />
      <JokeButton onClick={fetchJoke} />
    </div>
  );
};

export default App;