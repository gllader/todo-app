import React from 'react';
import { ClipboardText } from "@phosphor-icons/react"; 
import styles from './NoTasks.module.css'

export function NoTasks() {
  return (
    <div className={styles.container}>
      <span>
      <ClipboardText size={56}/>
      </span>
      <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
      <p>Crie tarefas e organize seus itens a fazer</p> 
    </div>
  )
}
