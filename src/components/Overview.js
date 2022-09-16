import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ol>
      {tasks.map((task) => {
        return (
           <li key={task.key}>
          {task.text}<FontAwesomeIcon icon="fa-solid fa-trash" />
          </li>
        )
      })}
    </ol>
  );
};

export default Overview;
