import React from 'react';
import s from './../Navbar.module.css';
import {connect} from 'react-redux'
import Friends from './Friends'

  let mapStateToProps = (state) => {

    return {
      messagesPage: state.messagesPage,
    }
  }
  let mapDispatchToProps = (dispatch) => {
    return {

    }
  }

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;
