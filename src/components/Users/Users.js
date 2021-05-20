import React from 'react';
import UsersCss from './Users.module.css';
import * as axios from 'axios';
import User from './User';

function Users(props) {

    if (props.state.usersPage.usersData.length === 0) {

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                debugger
                props.setUsers(response.data.items)
            })

        // props.setUsers([
        //     { id: 1, followed: true, name: "Эльвина Ряпова", status: "время весны", location: { country: "Россия", city: "Симферополь" } },
        //     { id: 2, followed: false, name: "Виктор Соляник", status: "does not exist", location: { country: "Россия", city: "Симферополь" } },
        //     { id: 3, followed: false, name: "Александр Нечаев", status: "", location: { country: "Россия", city: "Симферополь" } },
        //     { id: 4, followed: true, name: "Ахтем Маратов", status: "", location: { country: "Россия", city: "Симферополь" } },
        // ])
    }

    const usersElements = props.state.usersPage.usersData
        .map(user => <User
            id={user.id}
            followed={user.followed}
            name={user.name}
            status={user.status}
            // country={user.location.country}
            // city={user.location.city}
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

export default Users;