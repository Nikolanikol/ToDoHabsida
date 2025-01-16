

const TasksFilterComponent = ({setActiveFilter, activeFilter}) => {


    const filtersArr = ['All', 'Active', 'Completed']
    const handleClick = (item)=>{
        setActiveFilter(item)
    }
  return (
    <ul className="filters">
        {
            filtersArr.map((filter,i)=>{
                return (
                    <li key={i} onClick={()=>handleClick(filter)}>
                        <button className={filter ==  activeFilter? "selected" : ''}>{filter}</button>
                    </li>
                )
            })
        }
       
    </ul>
  )
}

export default TasksFilterComponent
