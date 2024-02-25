import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    width: calc(100% + 30px);
    flex-wrap: wrap;
`;

export const TaskCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    positio: relative;
    width: 200px;
    height: 150px;
    border: 1px solid white;
    margin: 50px;
`;