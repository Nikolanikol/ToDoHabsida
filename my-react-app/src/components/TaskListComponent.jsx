
import TaskComponent from './TaskComponent'

const TaskListComponent = () => {
  return (

    <ul className="todo-list">
        <TaskComponent className={'completed'} description={'Completed task'} createdTime={'created 17 seconds ago'}></TaskComponent>
        <TaskComponent className={'editing'} description={'Editing task'} createdTime={'created 5 minutes ago'}>
            <input type="text" width={200} height={100} className="edit" value="Editing task"/>
        </TaskComponent>
        <TaskComponent description={'Active task'} createdTime={'created 5 minutes ago'}></TaskComponent>

    </ul>

  )
}

export default TaskListComponent
