import { useState, useCallback, useEffect } from 'react';
import APIRequest from '@api-package/index';
import { TRequestMethod } from '@api-package/types';
import MaterialsBlock from './MaterialsBlock';
import { IMaterial } from '~/src/types';

const TasksPresenter = (): JSX.Element => {
    const [materials, updateMaterials] = useState({ } as IMaterial[]);
    const request = {
        uri: '/api/get-all-materials',
        method: TRequestMethod.GET,
        headers: {}
    };

    const getMaterials = useCallback(async () => {
        const res = await new APIRequest(request).doRequest();
        return res.isSuccess ? res.payload : null
    }, []);

    useEffect(() => {
        getMaterials().then(res => updateMaterials(res.materials))
    }, []);

    return <MaterialsBlock materials={materials}/>
}

export default TasksPresenter;