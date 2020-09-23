import React from 'react';
import EventBus from "../../config/eventBus";
import { Snackbar } from '@material-ui/core';
import { SnackbarContentWrapper } from "../../components"

class Alert extends React.Component {
  state = {
    visibility: false,
    message: '',
    type: ''
  }

  _setVisibility = (visibility) => {
    this.setState({visibility})
  }

  _setMessage = (message) => {
    this.setState({message})
  }

  _setType = (type) => {
    this.setState({type})
  }

  componentDidMount() {
    EventBus.addListener('flash', ({message, type}) => {
      this.setState({
        message,
        type,
        visibility: true
      })
      setTimeout(() => {
        this.setState({
          message: "",
          type: "",
          visibility: false
        })
      }, 4000);
    });
  }

  _handleClose = () => {
    this._setVisibility(false)
  }

  render() {
    const { visibility, type, message } = this.state;

    return (
      visibility &&
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={visibility}
      >
        <SnackbarContentWrapper
          onClose={this._handleClose}
          variant={type}
          message={message}
        />
      </Snackbar>
    )
  }
}

export default Alert;
