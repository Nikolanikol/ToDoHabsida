import { useState } from "react"


const NewTaskFormComponent = ({setTasks}) => {
    const [inputValue, setInputValue] = useState('')
    const handleKeyDown = (e)=>{

        if(e.key == 'Enter'){
            console.log('helo')
            setTasks(state=>{
                return [...state, {description : inputValue, time : new Date() ,status: false, id : new Date()}]
                })
            setInputValue('')
            }
        }
    
  return (
    <div>
        <h1>todos</h1>
        <input onKeyDown={(e)=>handleKeyDown(e)} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className="new-todo" placeholder="What needs to be done?" />
    </div>
  )
}

export default NewTaskFormComponent
