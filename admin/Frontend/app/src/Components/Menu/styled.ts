import styled from "styled-components";

export const MenuWrapepr = styled.menu`
    width: 100%;
    height: 3rem;
    background-color: #333;
`;

export const MenuItem = styled.a`
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    user-select: none;
    &:hover {
        background-color: #ddd;
        color: black;
        cursor: pointer;
    }
    &:active {
        background-color: #04AA6D;
        color: white;:
    }
`;