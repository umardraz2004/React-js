import React from "react";
import TodoList from "../models/TodoList";
import ListItem from "./ListItem";
import classes from "./Todo.module.css";

const Todo: React.FC<{ items: TodoList[]; onRemoveTodo: (todoId: string) => void }> = (props) => {
  return (
    <>
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <ListItem
            key={item.id}
            text={item.text}
            onRemoveHandler={props.onRemoveTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Todo;

// import React from "react";

// const Todo: React.FC<{ items: { task: string }[]  }> = (props) => {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li>{item.task}</li>
//       ))}
//     </ul>
//   );
// };

// export default Todo;
