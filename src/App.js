import { useState } from 'react';
import { Form } from './components/form';
import { Todos } from './components/todos';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todoApp/actions';

function App() {
  // DELETE ALL TODOS 
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);

  // EDIT FILTERED TODOS 
  const [editFormVisibility, setEditFormVisibily] = useState(false);

  const [editTodo, setEditTodo] = useState('');

  const handleEdit = (todo) => {
    setEditFormVisibily(true);
    setEditTodo(todo);
  }

  const cancelUpdate = ()=>{
    setEditFormVisibily(false);

  }

  return (
    <div className="wrapper d-flex flex-column align-items-center">
      <h1 className='text-center text-uppercase main-title my-4'><span>TODO List App</span></h1>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
      <Todos handleEdit={handleEdit} editFormVisibility={editFormVisibility} />
      {
        todos.length > 1 && (
          <button className='delete-all cancel-edit bg-danger mb-5' onClick={() => dispatch(deleteAll())}>DELETE ALL</button>

        )
      }

    </div>
  );
}

export default App;
