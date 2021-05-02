import { BrowserRouter, Route } from 'react-router-dom';
import './cssApp/reset.css';
import './cssApp/App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import ContentProfile from './components/ContentProfile/ContentProfile';
import ContentMessenger from './components/ContentMessenger/ContentMessenger';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />

        <div className="network">
          <div className="container">
            <div className="network__sections">
              <Menu />

              <div className="network__content">
                <Route path="/profile" render={() => <ContentProfile
                  state={props.state.profilePage}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText} />}
                />

                <Route path="/messenger" render={() => <ContentMessenger
                  state={props.state.messengerPage} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
