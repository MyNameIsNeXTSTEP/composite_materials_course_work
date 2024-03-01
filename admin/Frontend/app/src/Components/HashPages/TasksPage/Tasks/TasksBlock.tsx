import { ITask } from '~/src/types';
import * as ST from "./styled";

const TasksBlock = (tasks: { tasks: ITask[] }): JSX.Element => {
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

export default TasksBlock;