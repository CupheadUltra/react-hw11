import React, { Component } from 'react';
import initialTodos from './data/todo.json';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import Info from './components/Info';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };

    this.setState(prev => ({
      todos: [...prev.todos, newTodo],
    }));
  };

  deleteTodo = id => {
    this.setState(prev => ({
      todos: prev.todos.filter(t => t.id !== id),
    }));
  };

  toggleCompleted = id => {
    this.setState(prev => ({
      todos: prev.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    return todos.filter(t =>
      t.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  getCompletedCount = () => {
    return this.state.todos.filter(t => t.completed).length;
  };

  render() {
    const { filter, todos } = this.state;
    const visibleTodos = this.getVisibleTodos();
    const completedCount = this.getCompletedCount();

    return (
      <div style={{ padding: 20 }}>
        <Info total={todos.length} completed={completedCount} />

        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDelete={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
