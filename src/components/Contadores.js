import React from 'react';
import { connect } from 'react-redux';

const Contadores = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const notCompletedTasks = totalTasks - completedTasks;

  return (
    <div>
      <h2>Contadores</h2>
      <p>Total de Tarefas: {totalTasks}</p>
      <p>Tarefas Concluídas: {completedTasks}</p>
      <p>Tarefas Não Concluídas: {notCompletedTasks}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(Contadores);