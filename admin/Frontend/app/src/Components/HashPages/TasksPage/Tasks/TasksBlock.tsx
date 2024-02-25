import * as ST from "./styled";

/**
 * 
 * @param tasks
 * @returns ST.TaskCard[]
 */

const TasksBlock = (tasks): JSX.Element => {
    const tasksTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return <ST.Container>
        {tasksTest.map(
            (taskTest, id) => <ST.TaskCard>
                <p key={id}>{taskTest}</p>
            </ST.TaskCard>
        )}
    </ST.Container>
};

export default TasksBlock;