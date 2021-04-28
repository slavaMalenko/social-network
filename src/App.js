import { BrowserRouter, Route } from 'react-router-dom';
import './cssApp/reset.css';
import './cssApp/App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import ContentProfile from './components/ContentProfile/ContentProfile';
import ContentMessenger from './components/ContentMessenger/ContentMessenger';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />

        <div className="network">
          <div className="container">
            <div className="network__sections">
              <Menu />

              <div className="network__content">
                <Route path="/profile" component={ContentProfile} />
                <Route path="/messenger" component={ContentMessenger} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
