import React from "react";
import s from "./../Dialogs.module.css";


const Messages = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Message = (props) => {
        let sendMessageRef = React.createRef();

        var message = props.messagesPage.messages.map((m) => <Messages message={m.message} />);

        let sendMessage = () => {
          props.sendMessage()
        };

        let onMessageChange = () => {
          let body = sendMessageRef.current.value
          props.messageChange(body)
        };
        return (
          <div className={s.messages}>
            {message}
            <div>
              <div>
                <textarea
                  onChange={onMessageChange}
                  ref={sendMessageRef}
                  value={props.messagesPage.newMessageBody}
                ></textarea>
              </div>
              <div>
                <button onClick={sendMessage}>-=Send message=-</button>
              </div>
            </div>
          </div>
  );
};

export default Message;
