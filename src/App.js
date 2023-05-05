import './App.css';
import Color from './components/UseState';
import States from './components/component2';
import Price from './components/component3';
import Conditional from './components/condit';
import Mapping from './components/mapping';
import Persons from './components/personal';
function App() {
  return (
    <div className="App">
     <Persons name="edwin ngila"/>
     <States/>
     <Price/>
     <Color/>
     <Conditional/>
     <Mapping/>
    </div>
  );
}

export default App;
