import React from 'react'; 
import './App.css';
import Button from './Button';
import Symbols from "./Symbols";

function App() {

  const [firstvalueoftextarea, setfirstvalueoftextarea] = React.useState('');
  const [secondvalueoftextarea, setsecondvalueoftextarea] = React.useState('');

  return (
    console.log('Rendering of component'),
    <div className="App">

            <h1>{firstvalueoftextarea}</h1>
            
            <div className="Keypanel">
              <div className="Numbers">
                <Button valueoftextarea={firstvalueoftextarea} setvalueoftextarea={setfirstvalueoftextarea}></Button>
                
              </div>
              <h1>Calculator</h1>
              <div className="Symbols">
                <Symbols className="Symbols" firstvalueoftextarea ={firstvalueoftextarea} 
                      setfirstvalueoftextarea={setfirstvalueoftextarea}
                      secondvalueoftextarea ={secondvalueoftextarea} 
                      setsecondvalueoftextarea={setsecondvalueoftextarea}/>
              </div>
            </div>
    </div>
  );
}

export default App;
