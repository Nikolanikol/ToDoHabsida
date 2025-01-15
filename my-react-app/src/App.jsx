
import './App.css'
import FooterComponent from './components/FooterComponent'
import NewTaskFormComponent from './components/NewTaskFormComponent'
import TaskComponent from './components/TaskComponent'
import TaskListComponent from './components/TaskListComponent'

function App() {


  return (
    <>

    <section className="todoapp">
        <header className="header">
            <NewTaskFormComponent/>
        </header>
        <section className="main">
            <TaskListComponent/>
 
        </section>
        <FooterComponent/>

    </section>
    </>
  )
}

export default App
