import './App.css';
import { Navbar } from './component/navbar';
import { Bodydesain } from './component/bodydesain';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet name="Bruce" heroName="Programmer"/>
        <Greet name="alia" heroName="Teacher">
          <button>action</button>
        </Greet>
        <Greet name="putri" heroName="Youtuber">
        <p>This Children Content</p>
        </Greet>
        <Message/>
        <ClickHandler/>
        <ParentComponent /> */}
      </header>
      <React.Fragment> <Navbar/> </React.Fragment>
        <Bodydesain/>
    </div>
  );
}

export default App;
