
import TaskComponent from './TaskComponent'
import {formatDistanceToNow} from 'date-fns'
import { enUS, ru } from 'date-fns/locale'; // Для русского языка

const TaskListComponent = ({tasks, setTasks}) => {

    const handleTaskClick = ()=>{
        console.log('click')
    }
  return (

    <ul className="todo-list">
        {
            tasks.map(task=>{
                let clasezz = ''
                if(task.status == true) clasezz = 'completed'
                if(task.status == 'editing') clasezz = 'editing'
                return(
                    <TaskComponent 
                        setTasks={setTasks} 
                        id={task.id} 
                        key={task.id} 
                        className={clasezz}
                        description={task.description} 
                        createdTime={formatDistanceToNow(new Date(task.time))} 
                        status = {task.status}
                    >

                    </TaskComponent>
                )
            })
        }

    </ul>

  )
}
// completed
// editing
export default TaskListComponent
