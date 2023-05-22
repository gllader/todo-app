import React, {useState} from 'react';
import { Trash } from "@phosphor-icons/react";

import styles from './Task.module.css'


export function Task({task}) {

  const [isChecked, setIsChecked] = useState(false)

  function handleCheckButtonClick(event) {
    setIsChecked(event.target.checked);
  }

  return (    
   <div className={styles.task}>
    <input type="checkbox" onChange={handleCheckButtonClick}/>
    <p className={isChecked ? styles.checked : styles.unchecked}>{task}</p>
    <button>
      <Trash size={24}/>
    </button>
   </div>
  )
}
