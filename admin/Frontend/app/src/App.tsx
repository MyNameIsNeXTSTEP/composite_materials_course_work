import './Styles/App.css'
import Menu from './components/menu/index';
import { HashRouter, Route, Routes } from "react-router-dom";
import TasksPage from './components/hash-pages/materials-page';
import UsersPage from './components/hash-pages/user-page';
import TasksPresenter from './components/hash-pages/materials-page/materials/MaterialsPresenter';
import OrdersPage from './components/hash-pages/orders-page';

function App() {
    return (
        <HashRouter basename="/">
            <Menu/>
            <Routes>
                <Route path="/create-materials" element={<TasksPage/>}/>
                <Route path="/materials" element={<TasksPresenter/>}/>
                <Route path="/orders" element={<OrdersPage/>}/>
                <Route path="/users" element={<UsersPage/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App
