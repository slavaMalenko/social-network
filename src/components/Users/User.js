import React from 'react';
import UsersCss from './Users.module.css';

class User extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={UsersCss.user}>
                <div className={UsersCss.user_img}>
                    <img src={this.props.photo} className={UsersCss.img} />
                </div>

                <div className={UsersCss.content}>
                    <div className={UsersCss.information}>
                        <p className={UsersCss.name}>{this.props.name}</p>
                        <p className={UsersCss.status}>{this.props.status}</p>
                        <p className={UsersCss.location}>{'this.props.country'}, {'this.props.city'}</p>
                    </div>

                    <div className={UsersCss.button_cont}>
                        {
                            this.props.followed
                                ? <button onClick={() => { this.props.unfollow(this.props.id) }} className={UsersCss.button_on}>Удалить из друзей</button>
                                : <button onClick={() => { this.props.follow(this.props.id) }} className={UsersCss.button_off}>Добавить в друзья</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default User;