import { Route } from 'react-router-dom';
import './cssApp/reset.css';
import './cssApp/App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import ContentProfile from './components/ContentProfile/ContentProfile';
import ContentMessenger from './components/ContentMessenger/ContentMessenger';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {
  return (
    <div className="App">

      <Header />

      <div className="network">
        <div className="container">
          <div className="network__sections">
            <Menu />

            <div className="network__content">
              <Route path="/profile" render={() => <ContentProfile />} />

              <Route path="/messenger" render={() => <ContentMessenger />} />

              <Route path="/users" render={() => <UsersContainer />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
