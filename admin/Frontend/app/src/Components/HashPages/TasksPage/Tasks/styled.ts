import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    width: calc(100% + 30px);
    flex-wrap: wrap;
`;

export const TaskCard = styled.div`
    display: block;
    // justify-content: center;
    // align-items: center;
    position: relative;
    width: 250px;
    height: 300px;
    border: 1px solid white;
    margin: 50px;
    padding: 5px;
`;