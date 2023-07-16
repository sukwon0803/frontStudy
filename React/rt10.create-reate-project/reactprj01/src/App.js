// import { Routes, Route, NavLink } from 'react-router-dom';
// import styled, { css } from 'styled-components';
// import './App.css';
// import CompStyle from './containers/styled/CompStyle';
// import CrudContainer from './containers/crud/CrudContainer';
import PageHome from './pages/PageHome';

// const StyledApp = styled.div`
//   /* https://styled-components.com/docs/basics#adapting-based-on-props */
//   ul > li {
//     display: inline-block;
//     padding: 20px 40px;
//   }
// `;

// function App(){
//   return(
//     <div>
//       <CompStyle></CompStyle>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <CrudContainer></CrudContainer>
//     </div>
//   );
// }

// function App() {
//   return (
//     <StyledApp>
//       <ul>
//         <li>
//           <NavLink to="/style">style</NavLink>
//         </li>
//         <li>
//           <NavLink to="/crud">crud</NavLink>
//         </li>
//       </ul>
//       <Routes>
//         <Route path="/style" element={<CompStyle />} />
//         <Route path="/crud" element={<CrudContainer />} />
//       </Routes>
//     </StyledApp>
//   );
// }

function App() {
  return <PageHome></PageHome>;
}

export default App;
