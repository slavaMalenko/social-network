import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import UsersCss from './Users.module.css';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setUsersTotalCountActionCreator } from './../../redux/users-reducer';
import User from './User';
import userPhoto from './img/camera.png';


class UsersAPIComponent extends React.Component {

    constructor(props) {
        super(props);
        this.photo = userPhoto;
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
                            photo={this.photo}
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

let mapStateToProps = (state) => {
    return {
        state: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountActionCreator(totalCount))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;