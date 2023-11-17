import React, { ChangeEvent, useState } from 'react';

interface InputFormProps {
  onAdd: (text: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onAdd }) => {
  const [newText, setNewText] = useState('');

  const handleAdd = () => {
    if (newText.trim() !== '') {
      onAdd(newText);
      setNewText('');
    }
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        value={newText}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewText(e.target.value)}
        placeholder="Enter movie name"
      />
      <button className="movie-btn" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default InputForm;