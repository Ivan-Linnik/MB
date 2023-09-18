import SingleTodo from './SingleTodo';
import styles from './TodoList.module.css';

function AllTodos({ todos, completeTodo }) {
  return (
    <div className={styles.todoList}>
      {todos.map((item) => {
        return (
          <SingleTodo todo={item} key={item.id} completeTodo={completeTodo} />
        );
      })}
    </div>
  );
}

export default AllTodos;
