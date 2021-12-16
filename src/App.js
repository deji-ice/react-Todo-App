
import './CSS/main.css';
import DisplayTasks from './Components/DisplayTasks';
import Tasks from './Components/Tasks';


function App(play) {

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <Tasks/>
      <DisplayTasks/>
    </div>
  );
}

export default App;