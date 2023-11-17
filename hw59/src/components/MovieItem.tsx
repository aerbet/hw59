import React, { ChangeEvent, memo, useState } from 'react';

interface MovieItemProps {
  id: number;
  text: string;
  onEdit: (id: number, text: string) => void;
  onDelete: (id: number) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ id, text, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(id, editedText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedText(text);
    setIsEditing(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <div className="space">
            <div className="span-space">
              <span>{text}</span>
            </div>
            <div className="button-space">
              <button className="item-btn" onClick={handleEdit}>Edit</button>
              <button onClick={() => onDelete(id)}>Delete</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default memo(MovieItem);