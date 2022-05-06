import React, { useState } from 'react'
import TodoButton, { SelectButton } from './TodoButton'
import styles from '../../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { useDispatch,useSelector } from 'react-redux';
import { updateFilterStatus } from '../../slices/todoSlice';
function TodoHeader() {

  const filterStatus = useSelector(state=> state.todo.filterStatus);

  const [modalOpen, setModalOpen] = useState(false);

  // const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

  const dispatch = useDispatch();

  const updateFilter = (e) => {
    return dispatch(updateFilterStatus(e.target.value));
  }

  return (
    <div className={styles.appHeader}>
      <TodoButton type="button" variant="primary" onClick={() => setModalOpen(true)}>Add Task</TodoButton>
      <SelectButton value={filterStatus} onChange={updateFilter}>
        <option value="all">All</option>
        <option value="incomplete">InComplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen}>
      </TodoModal>
    </div>
  )
}

export default TodoHeader