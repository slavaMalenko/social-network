import './css/reset.css';
import './css/App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';

function App() {
  return (
    <div className="App">

      <Header />

      <div className="network">
        <div className="container">
          <div className="network__sections">

            <Menu />

            <Content />

          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
