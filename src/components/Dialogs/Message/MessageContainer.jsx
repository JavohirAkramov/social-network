import React from "react";
import s from "./../Dialogs.module.css";
import {sendMessageCreater, updateNewMessageBodyCreator,
} from "../../../redux/messages-reducer.js";
import Message from './Message'
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    newMessageBody: state.messagesPage.newMessageBody
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    messageChange: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreater())

    }
  }
}

const MessageContainer   = connect(mapStateToProps, mapDispatchToProps)(Message)

export default MessageContainer;
