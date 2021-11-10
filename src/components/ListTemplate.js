import React, { useState } from "react";
import styled from "styled-components";

const Template = styled.div`
    width: 10em;
    height: 36em;
    background-color: #ffffff;
    border-radius: 15px;
    padding: 1.5em;
    margin-right: 1em;
`;

function ListTemplate({ children }) {
    return (
        <Template>
            { children }
        </Template>
    );
}

export default ListTemplate;