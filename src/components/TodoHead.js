import React from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoContext";

const Head = styled.h1`
    display: flex;
    justify-content: space-between;
    color: #fd8c14;
`;

const Title = styled.div``;
const Count = styled.div``;

function TodoHead() {
    const todos = useTodoState();
    
    const unDone = todos.filter(todo => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return(
        <Head>
            <Title>{ dateString }</Title>
            <Count>{ unDone.length }</Count>
        </Head>
    );
}

export default TodoHead;