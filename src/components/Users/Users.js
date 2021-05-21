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
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                // this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={UsersCss.container} >
                <div className={UsersCss.top}>
                    <div className={UsersCss.all_users}>Все пользователи</div>
                </div>

                {
                    this.props.state
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
                <div>
                    <ul className={UsersCss.numbers}>
                        {
                            pages.map(page => {
                                return <li
                                    className={this.props.currentPage === page ? UsersCss.item_active : UsersCss.item}
                                    onClick={(e) => { this.onPageChanged(page) }}>{page}</li>
                            })
                        }
                    </ul>
                </div>
            </div >
        );
    }
}

export default Users;