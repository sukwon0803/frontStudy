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

const StyledCrudInput = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
`;

// const {...props} = props;
function CrudInput({ callbackAdd }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [변수명, set변수명] = useState('기본값'); // 상태값이 기본타입인 경우
  const [state, setState] = useState({ id: 0, name: '', age: 0 }); // 상태값이 참조타입 경우

  // useReducer 를 사용한 컴포넌트의 상태값 설정. 리듀서는 현재 상태를 받아서 새 상태를 반환하는 함수다
  const [리듀서, set리듀서] = useReducer(
    (oldvalue, newvalue) => ({ ...oldvalue, ...newvalue }),
    { id: 0, name: '', age: 0 },
  ); // 리듀서(reducer) 방식의 상태값 설정

  // ref 만들기.
  const refInputName = useRef();
  const refInputPower = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        // console.log('CrudInput >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('CrudInput >> componentDidMount');
        refIsMounted.current = true;
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('CrudInput >> componentWillUmount');
      };
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  // const callbackAdd = useCallback(
  //   (param) => {
  //     // state 변경
  //   },
  //   [
  //     /* 연관배열: 콜백 메서드에서 변경하고자 하는 연관되는 상태(변수)명들을 기술 */
  //   ],
  // );

  // 이벤트 핸들러 작성.
  const handlerAdd = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    // debugger;
    // 1.입력값 유효성 검사
    // Name 입력 여부 유효성 검사
    // 포커스
    // 이벤트 취소
    const name = refInputName.current.value;
    if (!name || !name.trim()) {
      alert('이름을 입력하세요.');
      // 포커스
      refInputName.current.focus();
      // 이벤트 취소
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    // Power 입력 여부 유효성 검사
    const power = refInputPower.current.value;
    // !power === power !== null || power !== undefined || power !== 0
    if (power === null || power === undefined || power < 0 || !power.trim()) {
      // 포커스
      alert('파워를 입력하세요.');
      refInputPower.current.focus();
      // 이벤트 취소
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    // Power 입력값이 숫자인지 여부 유효성 검사
    if (!isNaN(power)) {
      alert('파워는 숫자만 입력 가능합니다.');
      // 포커스
      refInputPower.current.focus();
      // 이벤트 취소
      e.stopPropagation();
      e.preventDefault();
    }

    // Power의 입력값을 숫자로 바꾸시오.(문자열을 숫자로)
    //power = Number
    // newItem 객체 만들기
    const newItem = {
      name: name,
      power: Number(power),
    };

    callbackAdd(newItem);
    refInputName.current.value = '';
    refInputPower.current.value = 0;
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledCrudInput>
      <div>
        <label htmlFor="">Name111 : </label>
        <input
          type="text"
          name="name"
          placeholder="이름을 입력하세요"
          defaultValue={''}
          ref={refInputName}
        />
      </div>
      <div>
        <label htmlFor="">Power : </label>
        <input
          type="number"
          name="power"
          placeholder="숫자를 입력하세요"
          defaultValue={0}
          ref={refInputPower}
        />
      </div>
      <button type="button" onClick={handlerAdd}>
        Add
      </button>
    </StyledCrudInput>
  );
}

CrudInput.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
  callbackAdd: PropTypes.func.isRequired,
};
CrudInput.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
  callbackAdd: () => {},
};

export default CrudInput; // React.memo(CrudInput); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
