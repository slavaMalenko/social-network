import './cssApp/reset.css';
import './cssApp/App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';

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
