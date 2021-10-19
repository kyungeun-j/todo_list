import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
// import TodoListTemplate from './components2/TodoListTemplate';
// import Form from './components2/Form';
// import TodoItemList from './components2/TodoItemList';
import TodoTemplate from './components/TodoTemplate';

const GlobaleStyle = createGlobalStyle`
  body {
    background-color: #e1e1e1;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
// 2e2e2e

const Container = styled.div`
  height: 650px;
  width: 510px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 1.5em;
  box-sizing: border-box;
`;
// 262525

function App() {
  return (
    <Fragment>
      <GlobaleStyle />
      <Container>
        <TodoTemplate />
      </Container>
    </Fragment>
  );
}


// class App extends Component {

//   id = 3

//   state = {
//     input: '',
//     todos: [
//       { id: 0, text: '리액트 소개', checked: false},
//       { id: 1, text: '리액트 소개', checked: true},
//       { id: 2, text: '리액트 소개', checked: false}
//     ]
//   }

//   handleChange = (e) => {
//     this.setState({
//       input: e.target.value
//     });
//   }

//   handleCreate = () => {
//     const { input, todos } = this.state;
//     this.setState({
//       input: '', // 인풋 비우고
//       // concat 을 사용하여 배열에 추가
//       todos: todos.concat({ // push를 사용할 경우 값은 추가되지만 가르키고있는 배열이 같아 비교가 불가능 
//                             // ->배열을 비교하여 리렌더링을 방지하는 최적화를 하기때문에 push를 사용할 경우 최적화 불가능
//         id: this.id++,
//         text: input,
//         checked: false
//       })
//     });
//   }

//   handleKeyPress = (e) => {
//     // 눌려진 키가 Enter 면 handleCreate 호출
//     if(e.key === 'Enter') {
//       this.handleCreate();
//     }
//   }

//   handleToggle = (id) => {
//     const { todos } = this.state;

//     // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
//     const index = todos.findIndex(todo => todo.id === id);
//     const selected = todos[index]; // 선택한 객체

//     const nextTodos = [...todos]; // 배열을 복사

//     // 기존의 값들을 복사하고, checked 값을 덮어쓰기
//     nextTodos[index] = { 
//       ...selected, 
//       checked: !selected.checked
//     };

//     this.setState({
//       todos: nextTodos
//     });
//   }

//   handleRemove = (id) => {
//     const { todos } = this.state;
//     this.setState({
//       todos: todos.filter(todo => todo.id !== id)
//     });
//   }

//   render() {
//     const { input, todos } = this.state;
    
//     const {
//       handleChange,
//       handleCreate,
//       handleKeyPress,
//       handleToggle,
//       handleRemove
//     } = this;

//     return (
//       <TodoListTemplate form={(
//         <Form
//           value={input}
//           onKeyPress={handleKeyPress}
//           onChange={handleChange}
//           onCreate={handleCreate}
//         />
//       )}>
//         <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
//       </TodoListTemplate>
//     );
//   }
// }

export default App;