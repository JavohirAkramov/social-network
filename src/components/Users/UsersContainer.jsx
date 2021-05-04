import React from 'react';
import UsersC from './UsersC';
import {connect} from 'react-redux';
import {unfollowAC} from './../../redux/users-reducer.js';
import {followAC} from './../../redux/users-reducer.js'
import {setUsersAC} from './../../redux/users-reducer.js'
import {setCurrentPageAC} from './../../redux/users-reducer.js'
import {setTotalUsersCountAC} from './../../redux/users-reducer.js'

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC);
