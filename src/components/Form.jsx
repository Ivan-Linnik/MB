import { useState } from 'react';
import styles from './Form.module.css';

function Form({ createTodo }) {
  const [inputValue, setInputValue] = useState('');

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!inputValue) {
      return;
    } else {
      createTodo(inputValue);
    }

    setInputValue('');
  }

  return (
    <form className={styles.formBody} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="inputField"
        id="inputField"
        placeholder="What needs to be done?"
        autoComplete="off"
        value={inputValue}
        onChange={handleInputValue}
      />
      <button className={styles.button} type="submit">
        Create
      </button>
    </form>
  );
}
export default Form;
