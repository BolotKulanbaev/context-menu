import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../contexts/todoContext";

const List = () => {
  const { getTodos, todos, deleteTodo } = useContext(todoContext);
  const navigate = useNavigate();
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      {todos.map(item => (
        <div key={item.id}>
          <div>{item.name}</div>
          {/* <div>{item.phone}</div>
          <div>{item.email}</div> */}

          {/* <button onClick={() => deleteTodo(item.id)}>Delete</button> */}
          {/* <button onClick={() => navigate(`/edit/${item.id}`)}>Details</button> */}
          <Button
            onClick={() => navigate(`/edit/${item.id}`)}
            variant="contained">
            Details
          </Button>
        </div>
      ))}
    </div>
  );
};

export default List;
