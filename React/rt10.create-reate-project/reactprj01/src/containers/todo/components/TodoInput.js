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

const StyledTodoInput = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
`;

// const {...props} = props;
function TodoInput({ callbackAddTodo }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [변수명, set변수명] = useState('기본값'); // 상태값이 기본타입인 경우
  const [state, setState] = useState({ id: 0, name: '', age: 0 }); // 상태값이 참조타입 경우

  const [isShowModal, setIsShowModal] = useState(false); // 상태값이 기본타입인 경우

  // useReducer 를 사용한 컴포넌트의 상태값 설정. 리듀서는 현재 상태를 받아서 새 상태를 반환하는 함수다
  const [리듀서, set리듀서] = useReducer(
    (oldvalue, newvalue) => ({ ...oldvalue, ...newvalue }),
    { id: 0, name: '', age: 0 },
  ); // 리듀서(reducer) 방식의 상태값 설정

  // ref 만들기.
  // const refInput = useRef();
  const refInputTodo = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        // console.log('TodoInput >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('TodoInput >> componentDidMount');
        refIsMounted.current = true;
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('TodoInput >> componentWillUmount');
      };
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  const callback = useCallback(
    (param) => {
      // state 변경
    },
    [
      /* 연관배열: 콜백 메서드에서 변경하고자 하는 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
  };
  const handlerShowModal = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    // isShowModal === true  ===> isShowModal = false
    // isShowModal === false ===> isShowModal = true
    setIsShowModal(!isShowModal);
    //setIsShowModal(false);
  };
  const handlerAddTodo = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    // 작업할 내용을
    // click 이벤트 취소. 버블링 방지

    // input 에 입력된 값을 가져오기. 어떻게 해야 하나? ==> ref이름.current.속성명
    // value 속성값 가져오기: ref이름.current.value
    // class 속성값 가져오기: ref이름.current.className

    // input 태그 입력값 유효성 검사
    // input 태그에 빈 문자열이나 공백이 입력 되는 경우는 modal 창이 출력되게 하시오

    // TodoContainer 의 callbackAddTodo 메서드 호출 기능 추가

    // add 후에 input 태그의 입력 값 지우기.
    // input 의 value 속성에 값을 설정하기. 어떻게 해야 하나? ==> ref이름.current.속성명
    // value 속성값 가져오기: ref이름.current.value

    // click 이벤트 취소. 버블링 방지
    e.stopPropagation();

    // input 에 입력된 값을 가져오기. 어떻게 해야 하나? ==> ref이름.current.속성명
    // value 속성값 가져오기: ref이름.current.value
    // class 속성값 가져오기: ref이름.current.className
    const value = refInputTodo.current.value;

    // input 태그 입력값 유효성 검사
    // input 태그에 빈 문자열이나 공백이 입력 되는 경우는 modal 창이 출력되게 하시오
    if (!value || !value.trim()) {
      // isShowModal = true;
      setIsShowModal(true);
      return; // 함수 실행을 멈춘다.
    }
    debugger;
    // TodoContainer 의 callbackAddTodo 메서드 호출 기능 추가
    callbackAddTodo(value);

    // add 후에 input 태그의 입력 값 지우기.
    // input 의 value 속성에 값을 설정하기. 어떻게 해야 하나? ==> ref이름.current.속성명
    // value 속성값 가져오기: ref이름.current.value
    refInputTodo.current.value = '';
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoInput className="inputBox shadow">
      <div>
        <input
          type="text"
          placeholder="Type what you have to do"
          ref={refInputTodo}
          onKeyUp={(e) => e.keyCode === 13 && handlerAddTodo(e)}
        />
        <span className="addContainer">
          <i aria-hidden="true" className="addBtn fas fa-plus" onClick={handlerAddTodo}></i>
        </span>

        {/* modal-mask */}
        {isShowModal && (
          <div className="modal-mask">
            <div className="modal-wrapper">
              <div className="modal-container">
                <div className="modal-header">
                  <h3 slot="header">경고</h3>
                </div>

                <div className="modal-footer" onClick={handlerShowModal}>
                  <span>
                    할 일을 입력하세요.
                    <i
                      className="closeModalBtn fas fa-times"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </StyledTodoInput>
  );
}

TodoInput.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
  callbackAddTodo: PropTypes.func.isRequired,
};
TodoInput.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
  callbackAddTodo: () => {},
};

export default TodoInput; // React.memo(TodoInput); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
