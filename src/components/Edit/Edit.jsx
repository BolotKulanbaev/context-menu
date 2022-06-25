import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { todoContext } from "../../contexts/todoContext";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOneTodo, oneTodo, updateTodo } = useContext(todoContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    getOneTodo(id);
  }, []);
  useEffect(() => {
    if (oneTodo) {
      setName(oneTodo.name);
      setPhone(oneTodo.phone);
      setEmail(oneTodo.email);
    }
  }, [oneTodo]);
  function handleSave() {
    let editedTodo = {
      name,
      phone,
      email,
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
            value={name}
            onChange={e => setName(e.target.value)}
            label="NAME"
            variant="outlined"
          />
          <TextField
            value={phone}
            onChange={e => setPhone(e.target.value)}
            label="PHONE"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            label="EMAIL"
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
