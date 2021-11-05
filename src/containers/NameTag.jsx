import React, { Component } from 'react';
import Controls from '../components/name-tag/Controls';
import Display from '../components/name-tag/Display';

export default class NameTag extends Component {
    state = {
      greeting: '',
      tagName: '',
      newName: '',
      newGreeting: '',
    };

    handleNameChange = (e) => {
      this.setState({ tagName: e.target.value });
    };
    handleGreetChange = (e) => {
      this.setState({ greeting: e.target.value });
    };
    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
        newName: this.state.tagName,
        newGreeting: this.state.greeting,
      });
    };

    render() {
      const { tagName, greeting, newName, newGreeting } = this.state;
      return (
        <>
          <Controls
            greeting={greeting}
            onNameChange={this.handleNameChange}
            tagName={tagName}
            onGreetChange={this.handleGreetChange}
            onSubmit={this.handleSubmit}
          />
          <Display newName={newName} newGreeting={newGreeting} />
        </>
      );
    }
}
