import { useCallback, useEffect, useState } from "react";
import { TRequestMethod } from "../bot-api-package/types";
import APIRequest from "../bot-api-package/api-package";
import * as ST from './styles/styled-task-block';
import { mockedTasks } from "./mocked-db-tasks";
import Keyboard from "./keyboard";

// declare global {
//     var Telegram: { WebApp: any };
// };

// const tg = window.Telegram.WebApp;

const TasksBlock = (tasks: { tasks: any[] }): JSX.Element | null => {
    const toDisplay = tasks.tasks;
    if (!toDisplay || !Array.isArray(toDisplay)) return null;
    return <ST.Container>
        {
            toDisplay.map((task) => {
                return <ST.TaskCard>
                    <div>
                        <p>ID: {task.id}; Название: {task.title}</p>
                        <p>Описание: {task.description}</p>
                        <p>Изображение: {task.image}</p>
                    </div>
                    <div>
                        Дата создания: {task.created_at};
                        Таймер игры: {task.default_timer_min}:{task.default_timer_sec}
                        Бонус таймер 3 букв: {task.bonus_timer_3_letters}
                        Бонус таймер 4 букв: {task.bonus_timer_4_letters}
                        Бонус таймер 5 букв: {task.bonus_timer_5_letters}
                        Бонус таймер 6+ букв: {task.bonus_timer_6_plus_letters}
                    </div>
                </ST.TaskCard>
            })
        }
    </ST.Container>
};

const App = (): JSX.Element => {
    // const [tasks, updateTasks] = useState([]);
    const request = {
        uri: '/api/get-all-tasks',
        method: TRequestMethod.GET,
    };

    const getTasks = useCallback(async () => {
        const res = await new APIRequest(request).doRequest();
        return res.isSuccess ? res.payload : null
    }, []);

    // useEffect(() => {
    //     getTasks().then(res => updateTasks(res.body));
    // }, []);

    const tasks = mockedTasks;

    return <div>
        Tasks
        <Keyboard activeLetters={["а", "б", "в"]}/>
        {/* <TasksBlock tasks={tasks}/> */}
        {/* <button onClick={() => tg.close()}></button> */}
    </div>;
}

export default App;