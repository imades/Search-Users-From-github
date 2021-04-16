import React from 'react';
import './App.css';
import Users from './components/users/Users';
import Navbar from'./components/users/partials/Navbar';




function App() {
  return (
    <div >
      <Navbar/>
    <div className="container mt-2">
       <Users/>
    </div>
    </div>
  );
}

export default App;
