import {useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]); //currentArray의 element 값들이 배열의 element 값으로
    setToDo("");
  };
  return (
    <div>
      <h1>MY To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;