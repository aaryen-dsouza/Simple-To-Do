import { useState } from "react";

export default function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  const inputChangeHandler = (e) => {
    setNewItem(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (newItem.trim() === "") {
      alert("Please enter a task");
      return;
    }
    onSubmit(newItem);
    setNewItem("");
  };

  return (
    <form className='new-item-form' onSubmit={formSubmitHandler}>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input
          type='text'
          id='item'
          value={newItem}
          onChange={inputChangeHandler}
        />
      </div>
      <button className='btn'>Add</button>
    </form>
  );
}
