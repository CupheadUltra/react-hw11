import React, { Component } from 'react';
import { Form, Textarea, Button } from './TodoEditor.styled';

class TodoEditor extends Component {
  state = {
    textValue: '',
  };

  handleChange = e => {
    this.setState({ textValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.textValue.trim()) {
      this.props.onSubmit(this.state.textValue);
      this.setState({ textValue: '' });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Textarea
          value={this.state.textValue}
          onChange={this.handleChange}
          placeholder="Введите текст задачи"
        />
        <Button type="submit">Create</Button>
      </Form>
    );
  }
}

export default TodoEditor;
