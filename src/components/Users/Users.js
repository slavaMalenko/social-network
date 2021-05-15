import React from 'react';
import UsersCss from './Users.module.css';
import usersAhtem from './img/ahtem.jpg';
import usersElya from './img/elya.jpg';
import usersSasha from './img/sasha.jpg';
import usersVictor from './img/victor.jpg';

function Users(props) {

    if (props.state.usersPage.usersData.length === 0) {
        props.setUsers([
            { id: 1, followed: true, name: "Эльвина Ряпова", status: "время весны", location: { country: "Russia", city: "Simferopol" } },
            { id: 2, followed: false, name: "Виктор Соляник", status: "does not exist", location: { country: "Russia", city: "Simferopol" } },
            { id: 3, followed: false, name: "Александр Нечаев", status: "", location: { country: "Russia", city: "Simferopol" } },
            { id: 4, followed: true, name: "Ахтем Маратов", status: "", location: { country: "Russia", city: "Simferopol" } },
        ])
    }

    const usersElements = props.state.usersPage.usersData
        .map(user => <User
            id={user.id}
            followed={user.followed}
            name={user.name}
            status={user.status}
            country={user.location.country}
            city={user.location.city}
            follow={props.follow}
            unfollow={props.unfollow}
        />)

    return (
        <div className={UsersCss.container}>
            <div className={UsersCss.top}>
                <div className={UsersCss.all_users}>Все пользователи</div>
            </div>

            {usersElements}
        </div>
    );
}

function User(props) {

    let photo = usersElya;

    if (props.id === 1) photo = usersElya
    else if (props.id === 2) photo = usersVictor
    else if (props.id === 3) photo = usersSasha
    else photo = usersAhtem

    return (
        <div className={UsersCss.user}>
            <div className={UsersCss.user_img}>
                <img src={photo} className={UsersCss.img} />
            </div>

            <div className={UsersCss.content}>
                <div className={UsersCss.information}>
                    <p className={UsersCss.name}>{props.name}</p>
                    <p className={UsersCss.status}>{props.status}</p>
                    <p className={UsersCss.location}>{props.country}, {props.city}</p>
                </div>

                <div className={UsersCss.button_cont}>
                    {
                        props.followed
                            ? <button onClick={() => { props.unfollow(props.id) }} className={UsersCss.button_on}>Удалить из друзей</button>
                            : <button onClick={() => { props.follow(props.id) }} className={UsersCss.button_off}>Добавить в друзья</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Users;