import React from 'react';
import ReactDOM from 'react-dom';

import useStyles from './styles'

function Backdrop(props) {
    const classes = useStyles();
    return (
        <div className={classes.backdrop}>
            {props.children}
        </div>
    )
}

function BackdropModal(props){
    return ReactDOM.createPortal(<Backdrop>{props.children}</Backdrop>, document.getElementById("backdrop"))
}

export default BackdropModal;