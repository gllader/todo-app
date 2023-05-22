import React, { useState, useEffect } from 'react';
import { Task } from './Task'
import { NoTasks } from './NoTasks'
import { PlusCircle } from "@phosphor-icons/react";

import styles from './TaskList.module.css'

export function TaskList() {
  const [tasks, setTasks] = useState([])
  const [newTasks, setNewTasks] = useState([''])
  
  const createdTasks = tasks.length

  function handleCreateTask() {
    event.preventDefault();
    setTasks([...tasks, newTasks]);
    setNewTasks('');
  }

  function handleNewTaskChange(){
    setNewTasks(event.target.value)
  }

  function handleDeleteTask(task) { 
    const filteredTasks = tasks.filter(item => {
      return item !== task;
    })
    setTasks(filteredTasks)
  }

  return (
    <>
      <form onSubmit={handleCreateTask}>
        <input type="text" name='task' placeholder="Adicione uma nova tarefa" value={newTasks} onChange={handleNewTaskChange} required/>
        <button type="submit" className={styles.createButton}>Criar
          <PlusCircle />
        </button>
      </form>
      <header>
        <div className={styles.createdTasks}>
          <p>Tarefas Criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.completedTasks}>
          <p>Concluidas</p>
          <span>0 de {tasks.length}</span>
        </div>
      </header>
      <div className={styles.taskContainer}>
        {
          createdTasks ? tasks.map(task=> {
              return <Task key={task} task={task} handleDeleteTask={handleDeleteTask}/>
          }) : <NoTasks />
        }
      </div>
    </>
  )
}
