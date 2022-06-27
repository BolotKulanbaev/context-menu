import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../contexts/todoContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./List.css";

const List = () => {
  const { getTodos, todos, deleteTodo } = useContext(todoContext);
  const navigate = useNavigate();
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <div className="list">
      {todos.map(item => (
        <div className="list-card" key={item.id}>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {item.phone}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {item.email}
          </Typography>

          <Button onClick={() => deleteTodo(item.id)} size="small">
            Delete
          </Button>
          <Button onClick={() => navigate(`/edit/${item.id}`)} size="small">
            Edit
          </Button>
        </div>
      ))}
    </div>
  );
};

export default List;
