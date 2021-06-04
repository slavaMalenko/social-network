import { Route, Redirect, Switch } from 'react-router-dom';
import './cssApp/reset.css';
import './cssApp/App.css';
import Menu from './components/Menu/Menu';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/ContentProfile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import ContentMessengerContainer from './components/ContentMessenger/ContentMessengerContainer';
import Login from './components/Login/Login';


function App(props) {
  return (
    <div className="app">
      <div className={"header"}>
        <div className="container">
          <HeaderContainer />
        </div>
      </div>

      <div className="network">
        <div className="container">
          <div className="network__container">
            <Menu />

            <div className="network__content">
              <Switch>
                <Route exact path="/profile/:userId?" render={() => <ProfileContainer />} />

                <Route path="/messenger" render={() => <ContentMessengerContainer />} />

                <Route path="/users" render={() => <UsersContainer />} />

                <Route path="/login" render={() => <Login />} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
