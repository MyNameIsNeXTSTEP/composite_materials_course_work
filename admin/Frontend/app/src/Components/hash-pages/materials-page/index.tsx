import { useState } from "react"
import * as ST from './styled.ts';
import { IFormData, imageForFormReq } from '../../../types/index.ts'

const TasksPage = (): JSX.Element => {
    const [saveStatus, updateSaveStatus] = useState('');
    const [taskImageFile, updateTaskImageFile] = useState('');
    const [imageForReq, updateImageForReq] = useState({} as imageForFormReq);
    const [formRequest, updateFormRequest] = useState({} as IFormData);

    const displayImage = (files: FileList | null) => updateTaskImageFile(URL.createObjectURL(files[0]));

    const processUploadedImage = (files: FileList | null) => { // @todo: fix the bug when form isn't submotable on the first click (async usaState issue)
        if (!files) throw new Error('No image was found in the request form');
        displayImage(files);
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload = () => updateImageForReq({
            imgBuffToSave: reader.result,
            imgName: files[0].name,
            type: files[0].type.replace('image/', '')
        });
    };

    const submitFormData = () => {
        try {
            fetch('http://localhost:3000/api/post-task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(formRequest)
            }).then(res => updateSaveStatus(res.ok
                ? 'Сохранено успешно'
                : 'Ошибка сохранения' + ', http status: ' + res.status));
        } catch (error) {
            console.log(error, '__ERROR__');
        };
    };

    const inputChangeHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        let collectedFormFields = {} as IFormData;
        formData.forEach((value, property: string) => {
            console.log(property, value);
            collectedFormFields[property] = value;
        })
        updateFormRequest({
            image: imageForReq,
            ...collectedFormFields
        });
        submitFormData();
    };

    return <ST.PageWrapper>
        <h2>Добавление нового материала/товара</h2>
        <form id='task_post_form' onSubmit={inputChangeHandler}>
            <ST.RowContainer>
                <ST.ClmnContainer>
                    <h3>Название</h3>
                        <ST.StandartInput type='text' name='name'/>
                    <h3>Описание</h3>
                        <ST.TextDescriptionInput name='description'/>
                </ST.ClmnContainer>
                <ST.ClmnContainer>
                    <h3>Изображение</h3>
                        <ST.ImageUpload
                            type="file"
                            id="uploaded_image"
                            onChange={event => processUploadedImage(event.target.files)}
                        />
                    <ST.TaskImage src={taskImageFile}/>
                    <h3>?</h3>
                        <ST.StandartInput name='letters'/>
                </ST.ClmnContainer>
            </ST.RowContainer>
            <ST.SaveButton id='submit_btn' type="submit">
                Сохранить
            </ST.SaveButton>
            <span id='save_status' style={{ fontWeight: 'bold' }}>{saveStatus ?? 'Что-то пошло не так'}</span>
        </form>
    </ST.PageWrapper>
};

export default TasksPage;