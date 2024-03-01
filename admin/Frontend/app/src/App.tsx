import './Styles/App.css'
import Menu from './Components/Menu/index';
import { HashRouter, Route, Routes } from "react-router-dom";
import TasksPage from './Components/HashPages/TasksPage';
import WordsPage from './Components/HashPages/WordsPage';
import UsersPage from './Components/HashPages/UsersPage';
import TasksPresenter from './Components/HashPages/TasksPage/Tasks/TaskPresenter';

function App() {
    return (
        <HashRouter basename="/">
            <Menu/>
            <Routes>
                <Route path="/create-tasks" element={<TasksPage/>}/>
                <Route path="/tasks" element={<TasksPresenter/>}/>
                <Route path="/words" element={<WordsPage/>}/>
                <Route path="/users" element={<UsersPage/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App
