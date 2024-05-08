import { IMaterial } from '~/src/types';
import * as ST from "./styled";
import { useState } from 'react';
import APIRequest from '@api-package/index';
import { TRequestMethod } from '@api-package/types';

interface IProps {
    materials: IMaterial[],
}

const MaterialsBlock = ({ materials }: IProps): JSX.Element | null => {
    if (!materials || !Array.isArray(materials)) return <p>Материалов не найдено, пожалуйста, обратитесь к техническому администратору</p>;
    const [isOpenDeletePopup, toggleDeletePopup] = useState(false);
    const [materialstoDeleteId, setMaterialstoDeleteId] = useState(null);
    const onDelete = (id: number) => {
        console.log(id);
        toggleDeletePopup(true);
        setMaterialstoDeleteId(id);
    };
    const deleteMaterial = async () => {
        const res = await new APIRequest({
            uri: '/api/delete-material',
            method: TRequestMethod.POST,
            body: JSON.stringify({ id: materialstoDeleteId }),
        }).doRequest();
        if (res.isSuccess) {
            alert(res.payload?.ok);
        } else {
            alert('Произошла ошибка удаления, пожалуйста, обратитесь к атехническому администратору');
        }
    };
    return <ST.Container>
        {
            materials.map(m => {
                return <ST.TaskCard>
                    <div className='info'>
                        <h3>{m.name.charAt(0).toUpperCase() + m.name.slice(1)}</h3>
                        <p>{m.description}</p>
                    </div>
                    <div className='props'>
                        <p>{m.image}</p>
                        <p>Дата создания: {m.createdAt}</p>
                        <p>На продаже: {m.is_on_sale}</p>
                        <p>Остатки на складе: {m.amount}</p>
                    </div>
                    <ST.DeleteButton onClick={() => onDelete(m.id)}>Удалить</ST.DeleteButton>
                </ST.TaskCard>
            })
        }
        { isOpenDeletePopup && <ST.PopupOverlay onClick={() => toggleDeletePopup(false)}>
            <ST.PopupContainer>
                <h3>Вы уверены, что хотите удалить этот материал ?</h3>
                <ST.PopupDeleteButton onClick={deleteMaterial}>Удалить</ST.PopupDeleteButton>
            </ST.PopupContainer>
        </ST.PopupOverlay>}
    </ST.Container>
};

export default MaterialsBlock;