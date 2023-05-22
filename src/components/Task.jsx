import React, {useState} from 'react';
import { Trash } from "@phosphor-icons/react";

import styles from './Task.module.css'

export function Task({task, handleDeleteTask}) {

  const [isChecked, setIsChecked] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(0);

  function handleCheckButtonClick(event) {
    setIsChecked(event.target.checked);
  }

  return (    
  <div className={styles.task}>
    <input type="checkbox" onClick={handleCheckButtonClick}/>
    <p className={isChecked ? styles.checked : styles.unchecked}>{task}</p>
    <button onClick={e => handleDeleteTask(task)}>
      <Trash size={24}/>
    </button>
  </div>
  )
}