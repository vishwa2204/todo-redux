import React from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, handleCheckBox } from '../redux/todoApp/actions';


export const Todos = ({ handleEdit, editFormVisibility }) => {
    const todos = useSelector((state) => state.operationsReducer);
    const dispatch = useDispatch();
    return todos.map((todo) => (
        <div key={todo.id} className='todo-box'>
            <div className='content'>
                {editFormVisibility === false && (
                    <input type="checkbox" checked={todo.completed} onChange={()=> dispatch(handleCheckBox(todo.id))}></input>

                )}
                <p style={todo.completed === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                    {todo.todo}
                </p>
            </div>
            <div className='actions-box'>
                {editFormVisibility === false && (
                    <div>
                        <span onClick={() => handleEdit(todo)}><FaRegEdit /></span>
                        <span className='bg-danger' onClick={() => dispatch(removeTodo(todo.id))}><FaRegTrashAlt /></span>
                    </div>
                )}

            </div>
        </div>
    ))
}
