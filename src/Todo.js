import react from "react";
import { Actions } from "./App";
export default function Todo({ obj_name, obj_complete, dispatch, id }) {
  const styles = { color: obj_complete ? "green" : "red" };
  return (
    <div>
      <span style={styles}>{obj_name}</span>
      <button
        onClick={() =>
          dispatch({ type: Actions.TOGGLE_TODO, payload: { id: id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: Actions.DELETE_TODO, payload: { id: id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
