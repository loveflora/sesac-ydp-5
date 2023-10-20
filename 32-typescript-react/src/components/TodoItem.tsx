import React from 'react';
import { ToDoItem } from '../types/types';

// interface TodoItem {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// { todo } => { todo: xxx }
// { todo } => { todo: {id, text, completed} }
interface Props {
  todo: ToDoItem;
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <div>
      <li>
        <label>
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          {/* checked 하면 안됨 */}
          {todo.text}
        </label>
      </li>
    </div>
  );
}
