import { PlusCircle } from "@phosphor-icons/react"; 
import styles from './Input.module.css'


export function Input({ handleFormSubmit }) {

  function handleSubmit(event){
    event.preventDefault();
  }
    
  return (
    <form action="submit" onSubmit={handleFormSubmit}>
      <input type="text" name='task' placeholder="Adicione uma nova tarefa"/>
      <button className={styles.createButton}>Criar
        <PlusCircle />
      </button>
    </form>
    )
}
