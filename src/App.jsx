import React from "react";
import "./App.css";
import TodoUi from './components/TodoUi'
import TodoContainer from "./context/TodoContainer";

function App() {
    return (
        <div className="App">
            
            <TodoContainer>
              <TodoUi />
            </TodoContainer>
           
        </div>
    );
}

export default App;
