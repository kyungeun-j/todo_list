import React from "react";
import styled from "styled-components";
import { useListState } from "./Context";

const Head = styled.h1`
    display: flex;
    justify-content: space-between;
    color: ${props => props.color};
`;

const Title = styled.div``;
const Count = styled.div``;

function TodoHead() {
    const lists = useListState();    
    const list = lists.filter(list => list.select);
    console.log(list)
    const color = String(list.map(list => list.color));

    const allUnDone = lists.filter(list => list.select).length !== 0 ?
        lists.map(list => list.todos.filter(todo => !todo.done).length)
            .reduce((a, c) => a+c) : 0;

    return(
        <Head color={ color }>
            <Title>
                { list.length !== 1 ? 'All Todos' : list.map(ls => (ls.title))}
            </Title>
            <Count>
                { list.length > 1 ? allUnDone : list.map(ls => ls.todos.filter(todo => !todo.done).length)}
            </Count>
        </Head>
    );
}

export default TodoHead;