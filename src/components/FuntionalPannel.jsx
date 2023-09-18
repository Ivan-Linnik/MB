import { NavLink } from 'react-router-dom';
import styles from './FunctionalPannel.module.css';

function FunctionalPannel({ todosLeft, clearCompleted }) {
  return (
    <div className={styles.functionalPannel}>
      <span className={styles.infoText}>{`${todosLeft} items left`}</span>
      <nav className={styles.toggleLists}>
        <NavLink to="." end>
          All{' '}
        </NavLink>
        <NavLink to="active">Active </NavLink>
        <NavLink to="completed">Completed</NavLink>
      </nav>
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
}

export default FunctionalPannel;
