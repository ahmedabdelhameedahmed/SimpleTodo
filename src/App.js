import { useReducer, useState } from "react";
import "./styles.css";
import Todo from "./Todo";
export const Actions = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo"
};
export default function App() {
  const intialstate = [];
  function reducer(state, action) {
    switch (action.type) {
      case Actions.ADD_TODO:
        return [
          ...state,
          {
            name: action.payload.todoname,
            id: action.payload.id,
            complete: action.payload.complete
          }
        ];
      case Actions.TOGGLE_TODO:
        return state.map((obj) => {
          if (obj.id === action.payload.id) {
            return { ...obj, complete: !obj.complete };
          } else {
            return obj;
          }
        });
      case Actions.DELETE_TODO:
        return state.filter((obj) => {
          return obj.id !== action.payload.id;
        });
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, intialstate);
  const [name, setName] = useState("");
  console.log(state);

  return (
    <div className="App">
      <h1>welcome to to do list:</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: Actions.ADD_TODO,
            payload: { id: Math.random(), complete: false, todoname: name }
          });
          setName("");
        }}
      >
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Add new To Do here ..."
        />
        {name}
      </form>
      {state.length > 0 ? (
        state.map((obj) => (
          <Todo
            obj_complete={obj.complete}
            obj_name={obj.name}
            key={obj.id}
            id={obj.id}
            dispatch={dispatch}
          />
        ))
      ) : (
        <h4>Nothing to do right now </h4>
      )}
    </div>
  );
}
