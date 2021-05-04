import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
  return (
    <div className={s.diallogItem}>
      <NavLink to={"/dialogs/" + props.id}>
        <img className={s.img} src={props.img}/>
        {props.name}
      </NavLink>
    </div>
  );
};

const Dialog = (props) => {
  let dialog = props.messagesPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} img={d.img}/>);

          return (
            <div className={s.dialogs}>
              <div className={s.dialogItems}>
                {dialog}
              </div>
            </div>
          )
}
export default Dialog;
