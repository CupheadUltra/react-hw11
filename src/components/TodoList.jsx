import React from 'react';
import { List, Item, Text, Button } from './TodoList.styled';

const TodoList = ({ todos, onDelete, onToggleCompleted }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <Item key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />

        <Text completed={completed}>{text}</Text>

        <Button onClick={() => onDelete(id)}>Delete</Button>
      </Item>
    ))}
  </List>
);

export default TodoList;
