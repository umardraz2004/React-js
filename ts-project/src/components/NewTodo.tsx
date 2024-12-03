import React, { useRef } from "react"
import classes from './NewTodo.module.css'
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const input = useRef<HTMLInputElement>(null);
    const submitHandler = (event : React.FormEvent) => {
        event.preventDefault();
        const enteredText = input.current!.value;
        // const enteredText = input.current?.value;
        if(enteredText.trim().length === 0) {
          return;
        }
        console.log(enteredText);
        props.onAddTodo(enteredText);
    }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={input} />
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo