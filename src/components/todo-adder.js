import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { TextField, Box, Button } from "@material-ui/core";

import { ADD_TODO } from "../redux/actions";

export default function TodoAdder() {
  const [title, setTitle] = useState(null);
  const [isValidTodo, setIsValidTodo] = useState(false);
  const titleFieldRef = useRef(null);

  const dispatch = useDispatch();
  
  function handleTextChange(e) {
    console.log(e.target.value);
    if(e.target.value==undefined || e.target.value==null || e.target.value.trim().length<=0){
      setIsValidTodo(true);
      console.log();
    }else{
      setIsValidTodo(false);
      console.log(isValidTodo);
      setTitle(e.target.value);
    }
  }

  function addTodoItem() {
    if (title) {
      dispatch({
        type: ADD_TODO,
        payload: {
          title,
        },
      });
      setTitle(null);
      titleFieldRef.current.value = "";
    }
  }

  return (
    <Box>
      <TextField
       error = {isValidTodo}
        style={{
          width: 400,
        }}
        inputRef={titleFieldRef}
        label="Add new todo"
        variant="filled"
        onChange={handleTextChange}
      ></TextField>
      <Button
        style={{
          height: 55,
        }}
        variant="contained"
        color="primary"
        onClick={addTodoItem}
      >
        Add
      </Button>
    </Box>
  );
}
