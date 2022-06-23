import { useState } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import NavPanel from './components/NavPanel';
import Stats from './components/Stats';

import ToolBar from './components/ToolBar';
function App() {
  const [sideBarCollapse, setSideBarCollapse] = useState(false);

  const collapseToggler = () => {
    setSideBarCollapse((sideBarCollapse) ? false : true);
  }

  return (
    <div className="App">
      <NavPanel collapse={sideBarCollapse} />
      <div className='main'>
        <ToolBar toggler={collapseToggler} />
        <Stats />
        <MainContent />
      </div>

    </div>
  );
}

export default App;
