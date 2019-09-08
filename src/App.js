import React from 'react';
// import logo from './logo.svg';
import './App.css';
import DisplayMenu from './components/DisplayMenu'
import Header from './components/Header'
import Staff from './components/Staff'

class App extends React.Component {
  render(){
  return (
    <div className="App">
    <Header />
     <DisplayMenu/>
     <Staff/>
    </div>
  );
  }
}

export default App;
