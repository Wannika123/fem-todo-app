import React from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <ToDoList />
      </div>
    )
  }  
}

export default App;
