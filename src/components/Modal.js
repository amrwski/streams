import React from "react"
import ReactDOM from "react-dom"

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        // stopPropagation() callback ensures the click event doesn't bubble up and cause clicking on the child div to dismiss the modal and redirect to "/" route. Only clicking on the parent div does that
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  )
}

export default Modal
