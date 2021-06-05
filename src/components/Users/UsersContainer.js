import React from 'react';
import { connect } from 'react-redux';
import UsersContainerCss from './UsersContainer.module.css';
import { followSuccess, unfollowSuccess, setCurrentPage, getUsers } from './../../redux/users-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import User from './User';
import Preloader from '../common/Preloader/Preloader';
import userPhoto from './img/camera.png';
import { compose } from 'redux';


class UsersAPIComponent extends React.Component {

    constructor(props) {
        super(props);
        this.photo = userPhoto;
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                                    photo={this.photo}
                                    followingInProgress={this.props.followingInProgress}
                                    followSuccess={this.props.followSuccess}
                                    unfollowSuccess={this.props.unfollowSuccess}
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
        followingInProgress: state.usersPage.followingInProgress,
    }
}

const UsersContainer = compose(
    connect(mapStateToProps, { followSuccess, unfollowSuccess, setCurrentPage, getUsers }),
    withAuthRedirect
)(UsersAPIComponent)

export default UsersContainer;