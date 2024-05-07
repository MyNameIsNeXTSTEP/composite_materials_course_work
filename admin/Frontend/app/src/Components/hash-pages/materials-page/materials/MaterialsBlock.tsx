import { ITask } from '~/src/types';
import * as ST from "./styled";

const MaterialsBlock = (tasks: { tasks: ITask[] }): JSX.Element => {
    const toDisplay = tasks.tasks;
    if (!toDisplay || !Array.isArray(toDisplay)) return null;
    return <ST.Container>
        {
            toDisplay.map((task) => {
                return <ST.TaskCard>
                    <div>
                        <p>ID: {task.id}; Название: {task.name}</p>
                        <p>Описание: {task.description}</p>
                        <p>Изображение: {task.image}</p>
                    </div>
                    <div>
                        Дата создания: {task.created_at};
                    </div>
                </ST.TaskCard>
            })
        }
    </ST.Container>
};

export default MaterialsBlock;