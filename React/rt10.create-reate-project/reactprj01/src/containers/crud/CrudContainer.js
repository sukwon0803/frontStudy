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
import CrudInput from './CrudInput';
import CrudList from './CrudList';

const StyledCrudContainer = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  .strong {
    color: red;
    font-weight: bold;
    font-size: 1.2em;
  }
  label {
    display: inline-block;
    width: 80px;
  }
  & > div {
    margin: 5px 0;
  }
`;

// const {...props} = props;
function CrudContainer({ ...props }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [items, setItems] = useState([
    { id: 1, name: '슈퍼맨', power: 100 },
    { id: 2, name: '아쿠아맨', power: 300 },
    { id: 3, name: '스파이더맨', power: 500 },
    { id: 4, name: '배트맨', power: 30 },
  ]); // 상태값이 기본타입인 경우

  // useReducer 를 사용한 컴포넌트의 상태값 설정. 리듀서는 현재 상태를 받아서 새 상태를 반환하는 함수다
  const [리듀서, set리듀서] = useReducer(
    (oldvalue, newvalue) => ({ ...oldvalue, ...newvalue }),
    { id: 0, name: '', age: 0 },
  ); // 리듀서(reducer) 방식의 상태값 설정

  // ref 만들기.
  // const refInput = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        // console.log('CrudContainer >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('CrudContainer >> componentDidMount');
        refIsMounted.current = true;
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('CrudContainer >> componentWillUmount');
      };
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  // items 배열에서 삭제하는 콜백 메서드 만들기. Array.filter() 를 사용한다
  const callbackDel = useCallback(
    (item) => {
      // ...생략
      //debugger;
      //복제후 할당
      const newItems =
        items &&
        items.length &&
        items.filter((obj) => {
          if (obj.id === item.id) return false;
          else return true;
        });
      // 할당
      setItems(newItems);
    },
    [
      /* 메서드와 연관되는 상태(변수)명들을 기술 */
      items,
    ],
  );

  // power를 100씩 증가 시키는 콜백 메서드 만들기. Array.map() 을 사용한다
  const callbackUp = useCallback(
    (id) => {
      // ...생략
      // debugger;
      //복제후 할당
      const newItems =
        items &&
        items.length &&
        items.map((obj) => {
          if (obj.id === id) obj.power = obj.power + 100;
          return obj;
        });
      // 할당
      setItems(newItems);
    },
    [
      /* 메서드와 연관되는 상태(변수)명들을 기술 */
      items,
    ],
  );

  // power를 50씩 감소 시키는 콜백 메서드 만들기. Array.map() 을 사용한다
  const callbackDown = useCallback(
    (id) => {
      // ...생략
      // debugger;
      //복제후 할당
      const newItems =
        items &&
        items.length &&
        items.map((obj) => {
          if (obj.id === id) obj.power = obj.power - 50;
          return obj;
        });
      // 할당
      setItems(newItems);
    },
    [
      /* 메서드와 연관되는 상태(변수)명들을 기술 */
      items,
    ],
  );

  // 새로운 값으로 수정하는 콜백 메서드 만들기. Array.map() 을 사용한다
  const callbackSave = useCallback(
    (newitem) => {
      // ...생략
      //debugger;
      const newItems =
        items &&
        items.length &&
        items.map((obj) => {
          if (obj.id === newitem.id) return newitem;
          return obj;
        });
      setItems(newItems);
    },
    [
      /* 메서드와 연관되는 상태(변수)명들을 기술 */
      items,
    ],
  );

  // 새로운 값을 추가하는 콜백 메서드 만들기.
  // Array에서  Array.map()과 Array.reduce()를 사용하여 max id 구하기
  const callbackAdd = useCallback(
    (newitem) => {
      // ...생략
      //debugger;
      // items에서 최대 id 값을 구하는 방법.
      // 방법1. items.map()과 items.reduce()를 사용하여 max id를 구하시오.
      let maxid = 0;
      if (items.length > 0) {
        maxid = items
          .map((item) => item.id)
          .reduce((pvalue, cvalue) => (pvalue >= cvalue ? pvalue : cvalue), -1);
      } else {
        maxid = 0;
      }
      const newid = maxid + 1;

      // newitem 에  id 프러퍼티 추가
      newitem.id = newid;

      // items 에 추가하시오
      // items.push(newitem);
      setItems([...items, newitem]);
    },
    [
      /* 메서드와 연관되는 상태(변수)명들을 기술 */
      items,
    ],
  );

  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledCrudContainer id="app">
      <h1>Creat Read Update Delete</h1>
      <CrudInput callbackAdd={callbackAdd}></CrudInput>
      <hr />
      <CrudList
        items={items}
        callbackDel={callbackDel}
        callbackUp={callbackUp}
        callbackDown={callbackDown}
        callbackSave={callbackSave}
      ></CrudList>
    </StyledCrudContainer>
  );
}

CrudContainer.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
CrudContainer.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default CrudContainer; // React.memo(CrudContainer); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
