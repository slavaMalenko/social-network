import { Route } from 'react-router-dom';
import './cssApp/reset.css';
import './cssApp/App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import ContentMessenger from './components/ContentMessenger/ContentMessenger';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/ContentProfile/ProfileContainer';


function App(props) {
  return (
    <div className="app">

      <Header />

      <div className="network">
        <div className="container">
          <div className="network__container">
            <Menu />

            <div className="network__content">
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

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
