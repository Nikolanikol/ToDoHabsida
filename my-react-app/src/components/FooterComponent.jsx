
import TasksFilterComponent from './TasksFilterComponent'

const FooterComponent = () => {
  return (
    <footer className="footer">
        <span className="todo-count">1 items left</span>
        <TasksFilterComponent/>
        <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default FooterComponent
