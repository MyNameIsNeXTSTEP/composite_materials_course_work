import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: calc(100% + 30px);
    flex-wrap: wrap;
`;

export const TaskCard = styled.div`
    align-self: center;
    display: block;
    position: relative;
    width: 250px;
    height: fit-content;
    border: 1px solid black;
    margin-bottom: 20px;
    padding: 5px;
`;