import { useState } from 'react'
import './App.css'
import Landing from "./components/Landing"
import Header from './components/Header';

function App() {

  const [activeComponent, setActiveComponent] = useState("Landing");

  const handleButtonClick = (component) => {
    setActiveComponent(component)
  }

  return (
    <div className='App'>
      <div className='content'>
        <Header handleButtonClick={handleButtonClick}/>
        {activeComponent === "Landing" && <Landing />}
      </div>
    </div>
  );
}

export default App;
