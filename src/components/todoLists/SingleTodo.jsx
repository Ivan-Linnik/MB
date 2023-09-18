import { SlCheck } from 'react-icons/sl';
import { SlReload } from 'react-icons/sl';
import styles from './TodoList.module.css';

function SingleTodo({ todo, completeTodo }) {
  return (
    <div
      className={`${styles.singleTodo} ${
        todo.isCompleted ? styles.completed : ''
      }`}
    >
      {!todo.isCompleted ? (
        <SlCheck
          onClick={() => completeTodo(todo.id)}
          className={styles.icon}
        />
      ) : (
        <SlReload
          onClick={() => completeTodo(todo.id)}
          className={styles.icon}
        />
      )}
      <span className={styles.text}>{todo.text}</span>
    </div>
  );
}

export default SingleTodo;
