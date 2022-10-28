import './App.css';
import {Greet} from './component/Greet';
import { Message } from './component/message';
import { ClickHandler } from './component/ClickHandler';
import {ParentComponent} from './component/ParentComponent'
import { Headers } from './component/header';
import { Bodydesain } from './component/bodydesain';

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
        <Headers/>
        <Bodydesain/>
      </header>
     
    </div>
  );
}

export default App;
