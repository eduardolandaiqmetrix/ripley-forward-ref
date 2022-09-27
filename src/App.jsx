import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { CreateTaskForm } from "./forms/CreateTaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <Root className="App">

        <ol>
          {tasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ol>
     
      <CreateTaskForm addTask={(task) => setTasks(prev => prev.concat(task)) } />
  
      <Button >Submit Form</Button>
    </Root>
  );
}

export default App;


const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 500px;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background-color: #d88c12;
  padding: 8px;
  font-weight: bold;
  color: white;
  border-radius: 8px;
`