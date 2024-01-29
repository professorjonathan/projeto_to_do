import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Tarefas from './components/Tarefas';
import Formulario from './components/Formulario';
import Contadores from './components/Contadores';
import { setTasks } from './actions'; // Importe ação para iniciar o carregamento
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula uma operação assíncrona, por exemplo, uma chamada de API
    setTimeout(() => {
      // Após o carregamento assíncrono, atualiza o estado Redux com os dados do localStorage
      store.dispatch(setTasks());
      setLoading(false);
    }, 300); // Tempo de simulação, ajuste conforme necessário
  }, []);

  if (loading) {
    return <p className="bg-slate-900">Carregando...</p>
  }

  return (
    <Provider store={store}>
      <div className="card">
        <h1>Lista de Tarefas</h1>
        <Formulario />
        <Tarefas />
        <Contadores />
      </div>
    </Provider>
  );
}

export default App;