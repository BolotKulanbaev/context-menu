import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { todoContext } from "../../contexts/todoContext";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOneTodo, oneTodo, updateTodo } = useContext(todoContext);
  const [todo, setTodo] = useState("");
  useEffect(() => {
    getOneTodo(id);
  }, []);
  useEffect(() => {
    if (oneTodo) {
      setTodo(oneTodo.todo);
    }
  }, [oneTodo]);
  function handleSave() {
    let editedTodo = {
      todo,
    };
    updateTodo(id, editedTodo);
    navigate("/list");
    console.log(editedTodo);
  }
  return (
    <Container>
      {oneTodo ? (
        <Box>
          <TextField
            value={todo}
            onChange={e => setTodo(e.target.value)}
            label="Outlined"
            variant="outlined"
          />
          <Button onClick={handleSave} variant="outlined">
            Save
          </Button>
        </Box>
      ) : (
        <h2>Loading ...</h2>
      )}
    </Container>
  );
};

export default Edit;
