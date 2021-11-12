import React from "react";
import styled from "styled-components";
import { useListState } from "./Context";
import TodoItem from "./TodoItem";

const List = styled.div`
    flex: 1
`;

function TodoList() {
    const lists = useListState();
    const all = lists.filter(list => list.select).length === 0
    console.log(lists)
    
    return(
        <List>
            {
                lists.map(list => (
                    all ?
                    list.todos.map(ls => (
                        <TodoItem
                            key={ ls.id }
                            listId={ list.id }
                            title={ list.title }
                            color={ list.color }
                            id={ ls.id }
                            text={ ls.text }
                            done={ ls.done }
                        />
                    )) :
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
                    console.log('list 없음')
                ))
            }
        </List>
    );
}

export default TodoList;