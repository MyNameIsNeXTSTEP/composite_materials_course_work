import styled from "styled-components";

export const PageWrapper = styled.div`
    display: block;
    width: 100%;
    max-width: 100%;
    #task_post_form {
        display: flex;
        flex-direction: column;
        & > * {
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
    // @media (max-width: 1520px) {
    //     width: 600px;
    // }
`;
        

export const StandartInput = styled.input`
    width: 400px;
`;

export const TextDescriptionInput = styled.textarea`
    display: block;
    width: 400px;
    height: 200px;
`;

export const ImageUpload = styled.input`
    display: block;
    width: 80px;
    height: 30px;
`;

export const TaskImage = styled.img`
    display: block;
    width: 500px;
    height: auto;
`;

export const ExtraGraphic = styled.img`

`;

export const RowContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
`;

export const ClmnContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-right: 30px;
`;

export const SaveButton = styled.button`
    display: block;
    width: 80px;
    height: 30px;
    cursor: pointer;
    background-color: #04AA6D;
    border: none;
`;

export const DescriptionText = styled.p`
    color: lightgray;
`;
