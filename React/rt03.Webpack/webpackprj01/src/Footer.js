import React from 'react';

// const {...props} = props;
function Footer({ ...props }) {
  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <div w3-include-footer="footer.html">
      <footer data-role="footer">
        <h1>Footer.html</h1>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
Footer.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default Footer; // React.memo(Footer); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
