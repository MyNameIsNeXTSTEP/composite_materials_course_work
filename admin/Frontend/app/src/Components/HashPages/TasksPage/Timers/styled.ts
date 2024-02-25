import styled from "styled-components";

export const TimerInput = styled.input`
    display: block;
    width: 15px;
    margin-right: 5px;
    margin-left: 5px;
`;

export const TaskTimer = styled.div`
    display: flex;
    flex-direction: row;
    width: 15px;
`;

export const ErrorText = styled.span`
    ${p => !p.children ? 'display: none' : 'color: red'};
`;