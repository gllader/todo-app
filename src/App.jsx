import { Header } from './components/Header'
import {TaskList} from './components/TaskList'
import styles from './App.module.css'
import './global.css'

// const tasks = [{
//   id: 1,
//   isCompleted: false,
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus!'
// },
// {
//   id: 2,
//   isCompleted: false,
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus!'
// }
// ]

function App() {


  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TaskList/>
      </main>
    </>
  )
}

export default App
