import { useState } from "react"

const TaskComponent = ({id, setTasks, className, description, createdTime, status}) => {
    const [inputValue, setInputValue] = useState(status)
    const [taskValue, setTaskValue] = useState('')

    const handleCompleteTask = ()=>{
        console.log(id)
        setInputValue(!inputValue)
        setTasks(state=>{
            return state.map(item=>{
                if(item.id == id){
                    return {...item, status : !Boolean(item.status)}
                }else{
                    return item
                }
            })
        })
    }
    const handleDeleteTask = ()=>{
        console.log(id)
        setTasks(state=>{
            return state.filter(item=>item.id != id)
        })
    }
    const handleOnEditTask = ()=>{
        setTasks(state=>{
            return state.map(item=>{
                if(item.id == id){
                    return {...item, status : 'editing'}
                }else{
                    return item
                }
            })
        })
    }
    const handleKeyDown = (e)=>{
        if(e.key == 'Enter'){
            setTasks(state=>{
                return state.map(item=>{
                    console.log(item)
                    if(item.id == id){
                        console.log(item)
                        return {...item, ...{description : taskValue, status : inputValue }}
                    }else{
                        return item
                    }
                })
            })
        }
    }
    return (

        <li className={className}>
            <div className="view">
                <input onClick={()=>handleCompleteTask()} value={inputValue} className="toggle" type="checkbox"/>
                <label>
                    <span className="description">{description}</span>
                    <span className="created">{createdTime}</span>
                </label>
                <button onClick={()=>handleOnEditTask()} className="icon icon-edit"></button>
                <button onClick={()=>handleDeleteTask()} className="icon icon-destroy"></button>
           </div>
           <input onKeyDown={(e)=>handleKeyDown(e)} value={taskValue} onInput={(e)=>setTaskValue(e.target.value)} type="text" width={200} height={100} className="edit" />

        </li>

  )
}


export default TaskComponent
