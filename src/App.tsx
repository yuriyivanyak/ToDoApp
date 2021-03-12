import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import { Navbar } from './components/Navbar';
import { AboutPage } from './components/pages/AboutPage';
import { TodoPage } from './components/pages/TodoPage';



const App: React.FC = () => {
 
  return (
    <BrowserRouter>
    <Navbar />
    <main className="container">
      <Switch>
        <Route component={TodoPage} path="/" exact/>
        <Route component={AboutPage} path="/about" />
      </Switch>
      </main>
    
    </BrowserRouter>
  );
}

export default App;
