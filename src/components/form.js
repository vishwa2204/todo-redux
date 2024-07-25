import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/todoApp/actions';

export const Form = ({ editFormVisibility, editTodo, cancelUpdate }) => {

    const dispatch = useDispatch();

    const [todoValue, setTodoValue] = useState('');

    const [editValue, setEditValue] = useState('');
    useEffect(() => {
        setEditValue(editTodo.todo);
    }, [editTodo])

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObject = {
            id: '',
            todo: todoValue,
            completed: false
        };
        setTodoValue('');
        dispatch(addTodo(todoObject));
    }

    // EDIT SUBMIT 

    const editSubmit = (e) => {
        e.preventDefault();
        let editedObject = {
            id: editTodo.id,
            todo: editValue,
            completed: false
        };
        dispatch(handleEditSubmit(editedObject));
    }

    return (
        <>
            {editFormVisibility === false ? (
                <form className='form-container' onSubmit={handleSubmit}>
                    <label> ADD YOUR TODO'S</label>
                    <div className="input-field-container">
                        <input type="text" className='form-fill' required value={todoValue} onChange={(e) => setTodoValue(e.target.value)} placeholder='ADD HERE' />
                        <button type="submit" > ADD TASK</button>
                    </div>

                </form>
            ) : (
                <form className='form-container' onSubmit={editSubmit}>
                    <label> UPDATE YOUR TODO'S</label>
                    <div className="input-field-container mb-4">

                        <input type="text" className='form-fill' required value={editValue || ""} onChange={(e) => setEditValue(e.target.value)} placeholder='UPDATE HERE' />


                        <button type="submit " > UPDATE TASK</button>
                    </div>

                    <button type="button" className='cancel-edit bg-danger' onClick={cancelUpdate} >BACK</button>

                </form>
            )}

        </>


    )
}
