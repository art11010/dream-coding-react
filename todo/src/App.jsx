import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import { DartModeProvider } from './context/DartModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DartModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DartModeProvider>
  );
}

export default App;
