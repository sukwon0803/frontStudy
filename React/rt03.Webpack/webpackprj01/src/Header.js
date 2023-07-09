import React from 'react';

// const {...props} = props;
function Header({ ...props }) {
  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <div w3-include-header="header.html">
      <header data-role="header">
        <h1>Header.html</h1>
      </header>
    </div>
  );
}

Header.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
Header.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default Header; // React.memo(Header); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
