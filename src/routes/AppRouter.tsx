import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AddTasks from '../pages/AddTasks/AddTasks'
import TaskDetail from '../pages/TaskDetail/TaskDetail'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add-task' element={<AddTasks/>}/>
            <Route path='/task' element={<TaskDetail/>}/>
        </Routes>
    )
}

export default AppRouter