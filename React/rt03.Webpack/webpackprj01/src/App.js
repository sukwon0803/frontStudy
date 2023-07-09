import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      {/*Header.js */}
      <Header></Header>
      <section id="page1" data-role="page">
        <div class="content" data-role="content">
          컨텐츠
        </div>
      </section>
      {/* Footer.js */}
      <Footer></Footer>
    </div>
  );
}

export default App;
