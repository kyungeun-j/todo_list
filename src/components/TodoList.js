import React, { Fragment } from "react";
import styled from "styled-components";
import { useListState } from "./Context";
import TodoItem from "./TodoItem";

const List = styled.div`
    flex: 1
`;

const Title = styled.div``;

function TodoList() {
    const lists = useListState();
    const all = lists.filter(list => list.select).length === 0
    const title =  lists.map(list => list.title);
    return(
        <List>
            {
                lists.map(list => (
                    all ?
                    list.todos.map(ls => (
                        <TodoItem
                            key={ ls.id }
                            listId={ list.id }
                            color={ list.color }
                            id={ ls.id }
                            text={ ls.text }
                            done={ ls.done }
                        />
                    )):
                    list.select ? 
                    list.todos.map(ls => (
                        <TodoItem
                            key={ ls.id }
                            listId={ list.id }
                            id={ ls.id }
                            text={ ls.text }
                            done={ ls.done }
                            color={ list.color }
                        />
                    )) :
                    <Fragment />
                ))
            }
        </List>
    );
}

export default TodoList;