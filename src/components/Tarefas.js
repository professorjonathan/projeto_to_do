import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../actions';

const Tarefas = ({ tasks, toggleTask, deleteTask, editTask }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedDescription, setEditedDescription] = useState('');

  const handleEdit = (id, description) => {
    setEditMode(id);
    setEditedDescription(description);
  };

  const handleSaveEdit = (id) => {
    editTask(id, editedDescription);
    setEditMode(null);
    setEditedDescription('');
  };

  return (
    <div>
      <h2>Todas as Tarefas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editMode === task.id ? (
              <>
                <input
                  type="text"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(task.id)}>Salvar</button>
              </>
            ) : (
              <>
                {task.description} - Concluída: {task.completed ? 'Sim' : 'Não'} <br />
                <button onClick={() => toggleTask(task.id)}>
                  {task.completed ? 'Desfazer' : 'Concluir'}
                </button>
                <button onClick={() => handleEdit(task.id, task.description)}>Editar</button>
                <button onClick={() => deleteTask(task.id)}>Excluir</button> <hr />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, { toggleTask, deleteTask, editTask })(Tarefas);