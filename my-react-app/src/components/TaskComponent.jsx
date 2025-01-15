
const TaskComponent = ({className, description, createdTime, children}) => {
  return (

        <li className={className}>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>
                <span className="description">{description}</span>
                <span className="created">{createdTime}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
           </div>
           {children}
        </li>

  )
}


export default TaskComponent
