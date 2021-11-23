import React, { useState, memo } from "react";
import styled, { css } from "styled-components";
import { BiPlusCircle } from 'react-icons/bi';
import { useDispatch, useNextId } from "./Context";

const Head = styled.div``;
const Form = styled.form`
    display: flex;
    margin-bottom: 0.5em;
    ${props =>
        props.add &&
        css`
            display: initial;
        ` 
        ||
        props.add == 'false' && css`
            display: none;
        `
    }
`;
const Color = styled.div`
    position: relative;
    border: none;
    background: transparent;
    width: 1.5em;
    height: 1.5em;
    border-radius: 1em;
`;
const ColorSelect = styled.div`
    position: absolute;
    top: 25px;
    background: var(--back-color);
    width: 10em;
    height: 4em;
    border-radius: 0.4em;
    display: none;    
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    box-sizing: border-box;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 7%;
        width: 0;
        height: 0;
        border: 0.6em solid transparent;
        border-bottom-color: var(--back-color);
        border-top: 0;
        margin-left: -0.5em;
        margin-top: -0.4em;
    }

    @media screen and (max-width: 800px) {
        top: 26px;
    }
`;
const ColorList = styled.div`
    width: 1.5em;
    height: 1.5em;
    border-radius: 1em;
`;
const Input = styled.input`
    flex: 1;
    outline: none;
    border: none;
    padding-left: 0.5em;
    width: 82%;
`;
const Add = styled.div`
    display: flex;
    width: fit-content;
    font-size: 24px;
    color: var(--base-color);
    cursor: pointer;
    
    &:hover {
        border: 2px dashed var(--base-color);
        margin: -2px;
        border-radius: 1em;
    }

    @media screen and (max-width: 800px) {
        margin-bottom: 1em;
        font-size: 2em;

        &:hover {
            border: none;
            margin: 0 0 1em 0;
        }
    }
`;
const All = styled.div`
    padding: 1em 0;
`;

function ListHead() {
    const dispatch = useDispatch();
    const nextId = useNextId();
    const id = nextId.current;

    const [add, setAdd] = useState(false);
    const [value, setValue] = useState('');
    const [color, setColor] = useState('#FFF587');

    const onAdd = () => setAdd(!add);
    const onChange = (e) => setValue(e.target.value);
    const onColor = (e) => setColor(e.target.style.backgroundColor);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'LIST_CREATE',
            list: {
                id: id,
                title: value,
                select: false,
                color: color,
                todos: []         
            }
        });
        dispatch({type: 'LIST_SELECT', id});
        setValue('');
        setColor('#FFF587');
        setAdd(false);
        nextId.current += 1;
    };
    const onSelect = () => dispatch({ type: 'LIST_SELECT', id: 'all'});
    const onColorSelect = (e) => {
        const colorPicker = document.getElementsByClassName('color-picker')[0];

        if ([...colorPicker.classList].indexOf('opend') > 0) {
            colorPicker.style.display = 'none';
        } else {
            colorPicker.style.display = 'flex';
        }
        document.getElementsByClassName('color-picker')[0].classList.toggle('opend');
    };

    return (
        <Head>
            <Add onClick={ onAdd } add={ add }>
                <BiPlusCircle className="addImg" />
            </Add>
            <All onClick={ onSelect }>All Todos</All>
            {(
                add && 
                <Form onSubmit={ onSubmit }>
                    <Color
                        onClick={ onColorSelect }
                        style={{ backgroundColor: color }}
                        value= { color }
                    >
                        <ColorSelect className="color-picker">
                            <ColorList onClick={ onColor } style={{ backgroundColor:"#FFF587" }}/>
                            <ColorList onClick={ onColor } style={{ backgroundColor:"#FF8C64" }}/>
                            <ColorList onClick={ onColor } style={{ backgroundColor:"#FF665A" }}/>
                            <ColorList onClick={ onColor } style={{ backgroundColor:"#7D6B7D" }}/>
                            <ColorList onClick={ onColor } style={{ backgroundColor:"#A3A1A8" }}/>
                        </ColorSelect>
                    </Color>
                    <Input
                        autoFocus
                        placeholder="Title"
                        onChange={ onChange }
                        value={ value }
                    />
                </Form>
            )}
        </Head>
    );
}

export default memo(ListHead);