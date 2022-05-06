import React, { useState, useEffect } from 'react'
import styles from '../../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import TodoButton from './TodoButton';
import { addTodo, updateTodo } from '../../slices/todoSlice';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-hot-toast';
function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    }else{
      setTitle('');
      setStatus('incomplete');
    }
  },[type,todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a title');
      return;
    }
    if (title && status) {
      if (type === 'add') {
        dispatch(addTodo({
          id: uuid(),
          title,
          status,
          time: new Date().toLocaleString()
        }));
        toast.success('Task Added Successfully');
      }
      if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({
            ...todo,
            title,
            status
          }))
        } else {
          toast.error('No chnages made');
        }
      }
    } else {
      toast.error('Task cannot be empty');
    }
    setTitle('');
    setModalOpen(false);
  }

  return (
    <div>{modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.closeButton} onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)} tabIndex={0} role="button">
            <MdOutlineClose></MdOutlineClose>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.formTitle}> {type === 'update' ? 'Update Task' : 'Add Task'}</h1>
            <label htmlFor="title">
              Title
              <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label htmlFor="status">
              Status
              <select type="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="incomplete">InComplete</option>
                <option value="complete">Complete</option>
              </select>
            </label>
            <div className={styles.buttonContainer}>
              <TodoButton type="submit" variant="primary">{type === 'update' ? 'Update Task' : 'Add Task'}</TodoButton>
              <TodoButton type="button" variant="secondary" onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)}>Cancel</TodoButton>
            </div>
          </form>
        </div>
      </div>
    )}
    </div>
  )
}

export default TodoModal