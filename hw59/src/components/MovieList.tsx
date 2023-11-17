import React, { useEffect, useState } from 'react';
import InputForm from './InputForm';
import MovieItem from './MovieItem';

interface Movie {
  id: number;
  text: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const handleAdd = (text: string) => {
    const newMovie: Movie = { id: Math.random(), text };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const handleEdit = (id: number, text: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => (movie.id === id ? { ...movie, text } : movie))
    );
  };

  const handleDelete = (id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <InputForm onAdd={handleAdd} />
      <div>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            text={movie.text}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;