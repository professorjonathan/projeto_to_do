// reducer.js
import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, DELETE_TASK } from './actionTypes';

const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

const initialState = {
  tasks: storedTasks,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: state.tasks.length + 1,
        description: action.payload.description,
        completed: false,
      };
      const updatedTasksAdd = [...state.tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd));
      return {
        ...state,
        tasks: updatedTasksAdd,
      };
    case TOGGLE_TASK:
      const updatedTasksToggle = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasksToggle));
      return {
        ...state,
        tasks: updatedTasksToggle,
      };
    case EDIT_TASK:
      const updatedTasksEdit = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, description: action.payload.description } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasksEdit));
      return {
        ...state,
        tasks: updatedTasksEdit,
      };
    case DELETE_TASK:
      const updatedTasksDelete = state.tasks.filter((task) => task.id !== action.payload.id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete));
      return {
        ...state,
        tasks: updatedTasksDelete,
      };
      case 'SET_TASKS':
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        return {
          ...state,
          tasks: storedTasks,
        };
  
      default:
        return state;
    }
  };
  
  export default tasksReducer;