import React from 'react';
import s from './../Navbar.module.css';
import {connect} from 'react-redux'

const Friend = (props) => {
  return (
    <div className={s.friend}>
      <img src={props.img} />
      {props.name}
    </div>
  );
}

const Friends = (props) => {

  let friedsArray = props.messagesPage.dialogs.map(el => {if (el.id <= 3) return <Friend name={el.name} img={el.img}/>});

  return (
            <div className={s.friendsArray}>
              {friedsArray}
            </div>
          )
        }


  let mapStateToProps = (state) => {
    console.log(state.messagesPage)

    return {
      messagesPage: state.messagesPage,
    }
  }
  let mapDispatchToProps = (dispatch) => {
    return {

    }
  }

const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default Friends;
