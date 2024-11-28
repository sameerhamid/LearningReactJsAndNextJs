import React from "react";

interface TodosPropsType {
  items: string[];
}
const Todos: React.FC<TodosPropsType> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => {
        return <li key={todo}>{todo}</li>;
      })}
    </ul>
  );
};

export default Todos;
