import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    width: calc(100% + 30px);
    flex-wrap: wrap;
`;

export const TaskCard = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 300px;
    height: 400px;
    border: 1px solid white;
    margin: 20px;
    padding: 15px;

    .props {
        position: absolute;
        bottom: 0;
    }
    .info {
        position: absolute;
        top: 0;
    }
`;

export const DeleteButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    width: 80px;
    height: 30px;
    cursor: pointer;
    background-color: orange;
    border: none;
    &:active {
        scale: 0.9;
    }
`;

export const PopupOverlay = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.5);
`;

export const PopupContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #333;
    width: 460px;
    height: 200px;
    padding: 20px;
    z-index: 1000;    
`;

export const PopupDeleteButton = styled.div`
    text-align: center;
    width: 80px;
    height: 30px;
    cursor: pointer;
    background-color: red;
    border: none;
    &:active {
        scale: 0.9;
    }
`;