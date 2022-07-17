import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []); //두번째 argument가 react가 지켜봐야 할 것이기 때문에 처음 한번만 실행된다
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]); // keyword가 변화할 때만 실행된다
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword or counter changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Searcg here" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;