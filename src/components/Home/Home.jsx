import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../contexts/todoContext";
import "./Home.css";

const List = () => {
  const { getTodos, todos, deleteTodo } = useContext(todoContext);
  const navigate = useNavigate();
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <div className="home">
      {todos.map(item => (
        <div key={item.id}>
          <div
            className="home-names"
            onClick={() => navigate(`/edit/${item.id}`)}>
            {item.name}
          </div>
          {/* <div>{item.phone}</div>
          <div>{item.email}</div> */}

          {/* <button onClick={() => deleteTodo(item.id)}>Delete</button> */}
          {/* <button onClick={() => navigate(`/edit/${item.id}`)}>Details</button> */}
          {/* <Button 
            onClick={() => navigate(`/edit/${item.id}`)}
            variant="contained">
            Details
          </Button> */}
        </div>
      ))}
    </div>
  );
};

export default List;
