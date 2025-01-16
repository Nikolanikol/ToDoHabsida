
import { useState } from 'react'
import './App.css'
import FooterComponent from './components/FooterComponent'
import NewTaskFormComponent from './components/NewTaskFormComponent'
import TaskComponent from './components/TaskComponent'
import TaskListComponent from './components/TaskListComponent'

function App() {
const [tasks, setTasks] = useState([
    {description : 'Task 1', time : new Date(),status: false, id : 1},
    {description : 'Task 2', time : new Date(),status: false, id : 2},
    {description : 'Task 3', time : new Date(),status: false, id : 3}
])

  return (
    <>

    <section className="todoapp">
        <header className="header">
            <NewTaskFormComponent/>
        </header>
        <section className="main">
            <TaskListComponent setTasks={setTasks} tasks = {tasks} />
 
        </section>
        <FooterComponent/>
    </section>
    </>
  )
}

export default App
