import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

const Formulario = ({ addTask }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(description);
    setDescription('');
  };

  return (
    <div>
      <h2>Adicionar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Nova Tarefa"
          required={true}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default connect(null, { addTask })(Formulario);