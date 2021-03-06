import React from 'react';
import styles from './Users.module.css'
import photo from './../../assets/images/logo512.jpg';
import Preloader from './../../assets/preloader/Preloader.jsx'
import * as axios from 'axios'
import {NavLink} from 'react-router-dom'

class UsersC extends React.Component {
    componentDidMount() {
      console.log(this.props)
      this.props.toggleIsFetching(true)
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
                            console.log(response)
                            this.props.toggleIsFetching(false)
                            this.props.setUsers(response.data.items);
                            this.props.setTotalUsersCount(response.data.totalCount)
                          })
    }
  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
                          this.props.toggleIsFetching(false)
                          this.props.setUsers(response.data.items);
                        })
  }


  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
      pages.push(i);
    }
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <div>
        <div>
          {pages.map( p => { return <span className={this.props.currentPage === p && styles.selectedPage}
                                          onClick={(e) => {this.onPageChanged(p)}}>{p}</span> } )}
        </div>

        {
          this.props.users.map(u =>
            <div key={u.id}>
              <span>
                <div>
                <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small ? u.photos.small : photo} className={styles.userPhoto}/>
                </NavLink>
                </div>
                <div>
                  {
                    u.followed
                      ? <button onClick={ () => {this.props.unfollow(u.id)} }>Unfollow</button>
                      : <button onClick={ () => {this.props.follow(u.id)} }>Follow</button>
                  }
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{u.uniqueUrlName}</div>
                </span>
              </span>
            </div>
          )
        }
      </div>
    </>
  }
}

export default UsersC;
