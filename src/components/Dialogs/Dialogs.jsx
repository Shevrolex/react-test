import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    // let dialogsData = [
    //     {id: 1, name: 'Dimych'}, 
    //     {id: 2, name: 'Oleg'},
    //     {id: 3, name: 'Sveta'},
    //     {id: 4, name: 'Sasha'},
    //     {id: 5, name: 'Victor'},
    //     {id: 6, name: 'Valera'}
    // ];

    let dialogsElement = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);

    // let dialogsElement = [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
    //     <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
    //     <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
    //     <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
    // ]

    // let messagesData = [
    //     {id: 1, message: 'Hi'}, 
    //     {id: 2, message: 'How are you bitch'},
    //     {id: 3, message: 'Shut up'},
    //     {id: 4, message: 'mazafucka'}
    // ];

    let messagesElement = props.state.messages.map( m => <Message message={m.message} />);

    let newMessageElement = React.createRef();
    
    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={classes.messages}>
                { messagesElement }
                {/* <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} /> */}

                <div>
                    <textarea onChange={onMessageChange} value={props.state.newMessagesText} ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;