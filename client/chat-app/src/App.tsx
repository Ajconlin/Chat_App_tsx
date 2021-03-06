import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from './Components/Chat';
import Join from './Components/Join';


const App: React.FC = () => {
  return (
    <div className="App">
        <Router>
          <Route path='/' exact component={Join} />
          <Route path='/chat' component={Chat} />
        </Router>
    </div>
  );
}

export default App;
