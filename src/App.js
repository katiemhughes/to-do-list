import React from 'react';
import './App.css';
import Header from './components/Header'

class App extends React.Component {

  state = {
    tasks: ["Task 1", "Task 2", "Task 3"]
  };

  render() {
    return(
      <div className="container">
        <div className="card frame">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;


