import vk from './img/vk.jpg';
import user from './img/icon-user.png';
import menu from './img/menu.png'
import './css/reset.css';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="header__cont">
            <img className="header__cont-img" src={vk} alt="" />
          </div>
        </div>
      </header>

      <div className="network">
        <div className="container">
          <div className="network__sections">
            <div className="network__menu">
              <ul>
                <li><a href="#"><img src={user} alt="" />Моя страница</a></li>
                <li><a href="#"><img src={menu} alt="" />Новости</a></li>
                <li><a href="#"><img src={menu} alt="" />Мессенджер</a></li>
                <li><a href="#"><img src={menu} alt="" />Друзья</a></li>
                <li><a href="#"><img src={menu} alt="" />Сообщества</a></li>
                <li><a href="#"><img src={menu} alt="" />Фотографии</a></li>
                <li><a href="#"><img src={menu} alt="" />Музыка</a></li>
                <li><a href="#"><img src={menu} alt="" />Видео</a></li>
                <li><a href="#"><img src={menu} alt="" />Игры</a></li>
                <li><a href="#"><img src={menu} alt="" />Закладки</a></li>
                <li><a href="#"><img src={menu} alt="" />Файлы</a></li>
                <li><a href="#"><img src={menu} alt="" />Реклама</a></li>
              </ul>
            </div>

            <div className="network__content"></div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
