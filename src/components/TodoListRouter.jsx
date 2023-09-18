import { Outlet } from 'react-router-dom';
import styles from './TodoListRouter.module.css';

function TodoListRouter() {
  return (
    <div className={styles.TodoListRouter}>
      <Outlet />
    </div>
  );
}

export default TodoListRouter;
