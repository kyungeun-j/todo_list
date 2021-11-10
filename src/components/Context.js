import React, { createContext, useContext, useReducer, useRef } from "react";

const lists = [];

function Reducer(state, action) {
    switch (action.type) {
        case 'LIST_CREATE':
            return state.concat(action.list)

        case 'LIST_REMOVE':
            return state.filter(list => list.id !== action.id);

        case 'UPDATE':
            return state.map(list => list.id !== action.id ?
                { ...list, title: action.title } : list);
        
        case 'LIST_SELECT':
            return state.map(list => list.id === action.id ?
                { ...list, select: !list.select } : { ...list, select: false });
            
        case 'TODO_CREATE':
            return state.map(list => list.id === action.id ?
                { ...list, todos: list.todos.concat(action.list.todo) } : list);

        case 'TODO_TOGGLE':
            return state.map(list => list.id === action.listId ?
                { ...list, todos: list.todos.map(todo => todo.id === action.id ? 
                    { ...todo, done: !action.done } : { ...todo }) } : { ...list });

        case 'TODO_REMOVE':
            return state.map(list => list.id === action.listId ?
                { ...list, todos: list.todos.filter(todo => todo.id !== action.id) } : { ...list });
        
        case 'TODO_UPDATE':
            return state.map(list => list.id === action.listId ?
                { ...list, todos: list.todos.map(todo => todo.id === action.id ? 
                    { ...todo, text: action.text } : { ...todo }) } : { ...list });
    

        default:
            throw new Error('Unhandled action type: ${action.type}');
    }
}

const StateContext = createContext();
const DispatchContext = createContext();
const NextIdContext = createContext();
const NextTodoIdContext = createContext();

export function Provider({ children }) {
    const [state, dispatch] = useReducer(Reducer, lists);
    
    // state: 앞으로 컴포넌트에서 사용할 수 있는 상태
    // dispatch: action을 발생시키는 함수
    const nextId = useRef(0);
    const nextTodoId = useRef(0);
    // const nextTodoId = useRef(0);
    // nextId:  아이템의 고유 ID

    return (
        <StateContext.Provider value={ state }>
            <DispatchContext.Provider value={ dispatch }>
                <NextIdContext.Provider value={ nextId }>
                    <NextTodoIdContext.Provider value={ nextTodoId }>
                        { children }
                    </NextTodoIdContext.Provider>
                </NextIdContext.Provider>
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

// custom Hook
// 해당 컴포넌트가 Provider 컴포넌트 내부에 렌더링되어야 함
export function useListState() {
    const context = useContext(StateContext);
    if (!context) {// Provider로 감싸져있지 않을 경우
        throw new Error('Cannot find Provider');
    }
    return context;
}

export function useDispatch() {
    const context = useContext(DispatchContext);
    if (!context) {
        throw new Error('Cannot find Provider');
    }
    return context;
}

export function useNextId() {
    const context = useContext(NextIdContext);
    if (!context) {
        throw new Error('Cannot find Provider');
    }
    return context;
}

export function useNextTodoId() {
    const context = useContext(NextTodoIdContext);
    if (!context) {
        throw new Error('Cannot find Provider');
    }
    return context;
}