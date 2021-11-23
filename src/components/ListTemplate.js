import React from "react";
import styled, { css } from "styled-components";
import { useListState } from "./Context";

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
        display: initial;
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        padding: 1em;
        margin-right: 0;

        ${props =>
            props.open === true && css`
                display: none;
            `
        }
    }
`;

function ListTemplate({ children }) {
    const lists = useListState();
    const open = lists.length !== 0 ? lists.map(list => list.select).filter(select => select)[0] : false;

    return (
        <Template open={ open }>
            { children }
        </Template>
    );
}

export default ListTemplate;