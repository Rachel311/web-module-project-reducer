import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers/index';

import { applyNumber, changeOperation, clearDisplay, memoryPlus, memoryMC, memoryMR } from './actions';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleAdd = (number) => {
    dispatch(applyNumber(number));
  }
  
  const handleOperations = (operation) => {
    dispatch(changeOperation(operation));
  }

  const handleClear = (number) => {
    dispatch(clearDisplay(number));
  }

  const handleMemoryPlus = (number) => {
    dispatch(memoryPlus(number));
  }

  const handleMemoryMC = (number) => {
    dispatch(memoryMC(number));
  }

  const handleMemoryMR = (number) => {
    dispatch(memoryMR(number));
  }
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation} </span>
              <span id="memory"><b>Memory:</b>{state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => handleMemoryPlus()} value={"M+"}/>
              <CalcButton onClick={() => handleMemoryMR()} value={"MR"}/>
              <CalcButton onClick={() => (handleMemoryMC())} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleAdd(1)} value={1}/>
              <CalcButton onClick={() => handleAdd(2)} value={2}/>
              <CalcButton onClick={() => handleAdd(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleAdd(4)} value={4}/>
              <CalcButton onClick={() => handleAdd(5)} value={5}/>
              <CalcButton onClick={() => handleAdd(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleAdd(7)} value={7}/>
              <CalcButton onClick={() => handleAdd(8)} value={8}/>
              <CalcButton onClick={() => handleAdd(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleOperations('+')} value={"+"}/>
              <CalcButton onClick={() => handleOperations('*')} value={"*"}/>
              <CalcButton onClick={() => handleOperations('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => handleClear(0)} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
