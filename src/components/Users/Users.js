import React from 'react';
import UsersCss from './Users.module.css';
import * as axios from 'axios';
import User from './User';

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div className={UsersCss.container} >
                <div className={UsersCss.top}>
                    <div className={UsersCss.all_users}>Все пользователи</div>
                </div>

                {
                    this.props.state.usersPage.usersData
                        .map(user => <User
                            key={user.id}
                            id={user.id}
                            followed={user.followed}
                            name={user.name}
                            status={user.status}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                        />)
                }
            </div>
        );
    }
}

export default Users;