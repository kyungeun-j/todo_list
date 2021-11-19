import React, { useState } from "react";
import styled from "styled-components";

const Template = styled.div`
    width: 10em;
    height: 36em;
    background-color: #ffffff;
    border-radius: 15px;
    padding: 1.5em 1em;
    margin-right: 1em;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        width: auto;
        height: -webkit-fill-available;
        padding: 0.7em;
        margin-right: 0.5em;
    }
`;

function ListTemplate({ children }) {

    return (
        <Template>
            { children }
        </Template>
    );
}

export default ListTemplate;