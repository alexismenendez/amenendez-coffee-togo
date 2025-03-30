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
      <Header handleButtonClick={handleButtonClick}/>
      {activeComponent === "Landing" && <Landing />}
    </div>
  );
}

export default App;
