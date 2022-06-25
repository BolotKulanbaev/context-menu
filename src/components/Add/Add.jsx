import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../contexts/todoContext";
import "./Add.css";

const Add = () => {
  const { createTodo, getTodos } = useContext(todoContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // function handleSave() {
  //   let newTodo = {
  //     name,
  //     phone,
  //     email,
  //   };
  //   createTodo(newTodo);
  //   navigate("/list");
  // }
  function handleSave() {
    if (!name || !phone || !email) {
      alert("Заполните все поля!");
    } else {
      let newTodo = {
        name,
        phone,
        email,
      };
      createTodo(newTodo);
      navigate("/list");
    }
    getTodos();
  }
  return (
    <Box className="add_box">
      <TextField
        value={name}
        onChange={e => setName(e.target.value)}
        className="add_name"
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
      />
      <TextField
        value={phone}
        onChange={e => setPhone(e.target.value)}
        className="add_name"
        helperText="Please enter your phone"
        id="demo-helper-text-aligned"
        label="(999)111333"
      />
      <TextField
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="add_name"
        helperText="Please enter your email"
        id="demo-helper-text-aligned"
        label="***********@gmail.com"
      />
      <Button onClick={() => handleSave()} variant="contained">
        +
      </Button>
    </Box>
  );
};

export default Add;
