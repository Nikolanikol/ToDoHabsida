
import TasksFilterComponent from './TasksFilterComponent'

const FooterComponent = ({activeFilter,setActiveFilter, leftTasks, setTasks }) => {
const handleClearCompleted = ()=>{
    setTasks(state=>{
        return state.filter(item=>item.status == false)
        })
    }
  return (
    <footer className="footer">
        <span className="todo-count">{leftTasks} items left</span>
        <TasksFilterComponent activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
        <button onClick={()=>handleClearCompleted()} className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default FooterComponent
