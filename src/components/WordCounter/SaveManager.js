import React, { Component } from 'react';
import SaveButton from './SaveButton';
import AlertBox from './AlertBox';
import { SUCCESS, FAILURE, WAITING, IDLE } from './saveStatus';

class SaveManager extends Component {
  state = {
    saveStatus: IDLE,
  };

  save = event => {
    event.preventDefault();

    this.setState(() => ({ saveStatus: WAITING }));

    this.props.saveFunction().then(
      () => this.setState(() => ({ saveStatus: SUCCESS })),
      () => this.setState(() => ({ saveStatus: FAILURE })),
    );
  };

  render() {
    return (
      <div>
        <SaveButton onClick={this.save} />
        <AlertBox status={this.state.saveStatus} />
      </div>
    );
  }
}

export default SaveManager;
