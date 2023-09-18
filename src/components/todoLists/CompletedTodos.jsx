import SingleTodo from './SingleTodo';
import styles from './TodoList.module.css';

function CompletedTodos({ todos, completeTodo }) {
  return (
    <div className={styles.todoList}>
      {todos
        .filter((item) => item.isCompleted)
        .map((item) => {
          return (
            <SingleTodo todo={item} key={item.id} completeTodo={completeTodo} />
          );
        })}
    </div>
  );
}

export default CompletedTodos;
