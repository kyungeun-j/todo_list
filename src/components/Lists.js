import React from "react";
import ListItem from "./ListItem"
import styled from "styled-components";
import { useListState } from "./Context";

const List = styled.div``;

function Lists() {
    const lists = useListState();
    
    return(
        <List>
            {
                lists.map(list => (
                    <ListItem
                        key={ list.id }
                        id={ list.id }
                        title={ list.title }
                    />
                ))
            }
        </List>
    );
}

export default Lists;