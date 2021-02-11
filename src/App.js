import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [{
  name: 'Groceries',
  id: 12345,
  completed: false
}]

class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos: todos
    }
  }

  addTodo = todo => {
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleCompleted = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => todo.completed === false)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
