import { useState, useCallback, useEffect } from 'react';
import APIRequest from '@api-package/index';
import { TRequestMethod } from '@api-package/types';
import MaterialsBlock from './MaterialsBlock';
import { ITask } from '~/src/types';

type TTasksResponse = {
    body: {
        tasks: ITask[];
    }
};

const TasksPresenter = (): JSX.Element => {
    const [tasks, updateTasks] = useState({ } as TTasksResponse);
    const request = {
        uri: '/api/get-all-tasks',
        method: TRequestMethod.GET,
        headers: {}
    };

    const getTasks = useCallback(async () => {
        const res = await new APIRequest(request).doRequest();
        return res.isSuccess ? res.payload : null
    }, []);

    useEffect(() => {
        // getTasks().then(res => updateTasks(res))
    }, []);
    console.log(tasks, 'pre-tasks');

    return <MaterialsBlock tasks={tasks.body}/>
}

export default TasksPresenter;