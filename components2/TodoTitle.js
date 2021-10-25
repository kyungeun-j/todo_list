import React from 'react'
import styled from 'styled-components';

const Container = styled.h1`
    width: -webkit-fill-available;
    text-align: left;
    color: #fd8c14;
`;

function TodoTitle({ date }) {

    return(
        <Container>{ date }</Container>
    );
}

export default TodoTitle;