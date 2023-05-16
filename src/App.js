// import Creates3 from './components/destracter props';
// import Form from './components/form using class componets';
// import Form2 from './components/forms using function';
// import Creates2 from './components/props class';
// import Creates from './components/props function';
// import Header from './components/using conditional rendaring';
// import List from './components/using list';
// import Counters from './components/using state in class';
// import Count from './components/using state in function';
// import Styled from './components/using style';
// import Color from './components/UseState';
// import States from './components/component2';
// import Price from './components/component3';
// import Conditional from './components/condit';
// import Mapping from './components/mapping';
// import Persons from './components/personal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './components/One';
import { useState } from 'react';
import MyItems from './components/Two';
import {BrowserRouter, Route,Switch} from 'react-router-dom/cjs/react-router-dom.min';
import NavigationTab from './components/Navigations';
function App() {
  const[list,setList]=useState("");
  const[show,setShow]=useState([]);
  return (
   <BrowserRouter>
    <div className="App">    
      <NavigationTab/>
      <div>
        <Switch>         
            <Route exact path="/One">
              <Forms
                list={list}
                setList={setList}
                show={show}
                setShow={setShow}
              />
            </Route>
            <Route path="/Two">
              <MyItems show={show}/>
            </Route>
            {/* <Route>
              <Error/>
            </Route> */}
        </Switch>
      </div>
    </div>    
   </BrowserRouter>

  );
}

export default App;
