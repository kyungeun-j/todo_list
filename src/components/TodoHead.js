import React from "react";
import styled from "styled-components";
import { useListState } from "./Context";

const Head = styled.h1`
    display: flex;
    justify-content: space-between;
    color: #fd8c14;
`;

const Title = styled.div``;
const Count = styled.div``;

function TodoHead() {
    const lists = useListState();    
    const list = lists.filter(list => list.select)

    console.log(list.map(ls => ls.todos.filter(todo => !todo.done)))
    
    const allUnDone = list.length !== 0 ?
        lists.map(list =>
        list.todos.filter(todo => !todo.done).length)
        .reduce((a, c) => a+c) : 0;

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return(
        <Head>
            <Title>
                { list.length !== 0 ? list.map(ls => (ls.title)) : dateString }
            </Title>
            <Count>
                { list.length !== 0 ? list.map(ls => ls.todos.filter(todo => !todo.done).length) : allUnDone }
            </Count>
        </Head>
    );
}

export default TodoHead;