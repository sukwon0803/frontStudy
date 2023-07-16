import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  Fragment,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  useNavigate,
} from 'react-router-dom';

const StyledTodoList = styled.section`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
`;

// const {...props} = props;
function TodoList({ todoItems, callbackDoneToggle, callbackRemoveTodo }) {
  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
  };

  const handlerDoneToggle = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    // debugger;
    const id = Number(e.target.dataset.id); // data-id. Number() : 문자열을 숫자로 변환
    const item = JSON.parse(e.target.dataset.item); // data-item

    // 부모 메서드 호출
    callbackDoneToggle(id);
  };

  const handlerRemoveTodo = (e, id) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    // 부모 컴포넌트의 콜백 메서드 callbackRemoveTodo 호출
    callbackRemoveTodo(id);
  };

  const lis =
    todoItems &&
    todoItems.length > 0 &&
    todoItems.map((item) => {
      return (
        <li
          key={item.id}
          className={item.done ? 'checked' : null}
          data-id={item.id}
          data-item={JSON.stringify(item)}
          onClick={handlerDoneToggle}
        >
          <i aria-hidden="true" className="checkBtn fas fa-check"></i>
          {item.todo}
          <span
            type="button"
            className="removeBtn"
            onClick={(e) => {
              e.stopPropagation(); // 이벤트 취소. 버블링 방지

              // 부모 컴포넌트의 콜백 메서드 handlerRemoveTodo 호출
              handlerRemoveTodo(e, item.id);
            }}
          >
            <i aria-hidden={item.done} className="far fa-trash-alt"></i>
          </span>
        </li>
      );
    });

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoList>
      <ul>{lis}</ul>
    </StyledTodoList>
  );
}

TodoList.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
  todoItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  callbackDoneToggle: PropTypes.func.isRequired,
  callbackRemoveTodo: PropTypes.func.isRequired,
};
TodoList.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
  todoItems: [],
  callbackDoneToggle: () => {},
  callbackRemoveTodo: () => {},
};

export default TodoList; // React.memo(TodoList); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
