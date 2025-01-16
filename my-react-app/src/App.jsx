
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
const [activeFilter, setActiveFilter] = useState('All')
    const getFilterArr = (filter, arr)=>{
        switch (filter){
            case 'All':
                return arr
            case 'Active':
                return arr.filter(item=>item.status == false)
            case 'Completed':
                return arr.filter(item=>item.status == true)

        }
    }
    const filteredTasks = getFilterArr(activeFilter ,tasks)

    const leftTasks = tasks.reduce((num, curr)=>{
        if(curr.status == false) num++
        return num
    }, 0)

  return (
    <>

    <section className="todoapp">
        <header className="header">
            <NewTaskFormComponent setTasks={setTasks} />
        </header>
        <section className="main">
            <TaskListComponent setTasks={setTasks} tasks = {filteredTasks} />
 
        </section>
        <FooterComponent setTasks={setTasks} leftTasks={leftTasks} activeFilter = {activeFilter} setActiveFilter = {setActiveFilter} />
    </section>
    </>
  )
}

export default App
