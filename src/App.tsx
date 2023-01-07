import React from 'react';
import * as Style from './styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, deletedAll } from './redux/slice/todo';

function App() {
  const dispatch = useDispatch();
  const todo = useSelector((state: any) => state.todo.task);
  const [input, setInput] = React.useState('');

  const addTask = () => {
    dispatch(addTodo(input));
    setInput('');
    console.log(todo);
  };

  const allClear = () => {
    if (window.confirm('Вы действительно хотите очистить все?') === true) {
      dispatch(deletedAll());
    }
  };
  if (input === ' ') {
    setInput('');
  }

  return (
    <div className={Style.body}>
      <div className={Style.header}>
        <h1 className={Style.headerTitle} style={{ color: 'white' }}>
          Список задач
        </h1>
        <input
          className={Style.inputStyle}
          placeholder="Введите текст...."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className={Style.btnAdd} disabled={!input} onClick={addTask}>
          +
        </button>
        <hr />
      </div>

      <h2 className={Style.title}>Все задачи:</h2>
      <h3 className={Style.task}>
        {todo.map((todo: any) => (
          <li key={todo.id}>
            {todo.text}
            <button className={Style.btnDelete} onClick={() => dispatch(deleteTodo(todo.id))}>
              X
            </button>
            <br />
          </li>
        ))}
      </h3>
      <button className={Style.allClear} onClick={allClear}>
        Очистить все
      </button>
    </div>
  );
}

export default App;
