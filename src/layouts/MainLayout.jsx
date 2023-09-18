import Form from '../components/Form';
import FunctionalPannel from '../components/FuntionalPannel';
import TodoListRouter from '../components/TodoListRouter';

function MainLayout({ createTodo, todosLeft, clearCompleted }) {
  return (
    <>
      <h1 className="appHeader">todos</h1>
      <Form createTodo={createTodo} />
      <TodoListRouter />
      <FunctionalPannel todosLeft={todosLeft} clearCompleted={clearCompleted} />
    </>
  );
}

export default MainLayout;
