import React from 'react';
import UsersC from './UsersC';
import {connect} from 'react-redux';
import {unfollow, follow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from './../../redux/users-reducer.js';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalUsersCount) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }

export default connect(mapStateToProps,
                  {
                    follow,
                    unfollow,
                    setUsers,
                    setCurrentPage,
                    setTotalUsersCount,
                    toggleIsFetching
                  }
                )(UsersC);
