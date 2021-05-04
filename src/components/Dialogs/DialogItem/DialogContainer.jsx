import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Dialog from './Dialog'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}
let mapDispatchToProps = () => {
  return {

  }
}
const DialogContainer = connect(mapStateToProps , mapDispatchToProps)(Dialog)
export default DialogContainer;
