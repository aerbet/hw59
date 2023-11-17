import React from 'react';

interface JokeButtonProps {
  onClick: () => void;
}

const JokeButton: React.FC<JokeButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Get Joke</button>
    </div>
  );
};

export default JokeButton;