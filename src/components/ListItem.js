import React, { useState } from "react";
import { MdOutlineClear } from 'react-icons/md';
import styled from "styled-components";

const Item = styled.div`
    display: flex;
`;
const Title = styled.div``;
const Remove = styled.div``;

function ListItem({ id, title, todos }) {
    return(
        <>
            <Item>
                <Title>
                    { title }
                </Title>
                <Remove>
                    <MdOutlineClear />
                </Remove>
            </Item>
        </>
    );
}

export default ListItem;