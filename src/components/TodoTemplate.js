import React from "react";
import styled from "styled-components";

const Template = styled.div`
    width: 31em;
    height: 36em;
    background-color: #ffffff;
    border-radius: 15px;
    padding: 1.5em;
    display: flex;
    flex-direction: column;
`;

function TodoTemplate({ children }) {
    return (
        <Template>
            { children }
        </Template>
    );
}

export default TodoTemplate;