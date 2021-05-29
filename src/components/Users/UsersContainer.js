import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import UsersContainerCss from './UsersContainer.module.css';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from './../../redux/users-reducer';
import User from './User';
import Preloader from '../common/Preloader/Preloader';
import userPhoto from './img/camera.png';


class UsersAPIComponent extends React.Component {

    constructor(props) {
        super(props);
        this.photo = userPhoto;
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                {
                    withCredentials: true,
                })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                // this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
                {
                    withCredentials: true,
                })
            .then(response => {
                this.props.toggleIsFetching(false);
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
            <>
                <div className={UsersContainerCss.content} >
                    <div className={UsersContainerCss.header}>
                        <div className={UsersContainerCss['all-users']}>Все пользователи</div>
                    </div>

                    <div className={UsersContainerCss.body}>
                        {this.props.isFetching
                            ? <Preloader />
                            : this.props.state
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
                    </div>

                    <ul className={UsersContainerCss.numbers}>
                        {
                            pages.map(page => {
                                return (
                                    <li
                                        className={this.props.currentPage === page ? UsersContainerCss['number-active'] : UsersContainerCss.number}
                                        onClick={(e) => { this.onPageChanged(page) }}>
                                        {page}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div >
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching })(UsersAPIComponent);
export default UsersContainer;