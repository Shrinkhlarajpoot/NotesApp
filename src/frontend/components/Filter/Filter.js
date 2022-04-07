import { useState } from "react";
import { useNotes } from "../../context";
import "./Filter.css";
const Filter = () => {
  const [togglefilter, setToggleFilter] = useState(false);
  const { notesState, notesDispatch } = useNotes();
  return (
    <div>
      <span
        class="material-icons-outlined filter_icon"
        onClick={() => setToggleFilter(true)}
      >
        filter_alt
      </span>
      {togglefilter && (
        <div className="filterPalette">
          <div className="closeclear">
            <div class="clear_filter" 
            onClick={()=>{
              notesDispatch({
                type:"CLEAR_FILTERS"
              })
            }}>Clear</div>
            <span
              class="material-icons-outlined"
              onClick={() => setToggleFilter(false)}
            >
              close
            </span>
          </div>

          <h5>Sort By</h5>
          <p>Date</p>

          <label>
            <input
              type="radio"
              name="date"
              checked={notesState.sortByDate === "LATEST"}
              onChange={() => {
                notesDispatch({
                  type: "LATEST",
                  payload: {
                    sortByDate: "LATEST",
                  },
                });
              }}
            ></input>
            Latest
          </label>
          <label>
            <input
              type="radio"
              name="date"
              checked={notesState.sortByDate === "OLDEST"}
              onChange={() => {
                notesDispatch({
                  type: "OLDEST",
                  payload: {
                    sortByDate: "OLDEST",
                  },
                });
              }}
            ></input>
            Oldest
          </label>
          <p>Priority</p>
          <label>
            <input
              type="radio"
              name="priority1"
              checked={notesState.sortByPriority === "HIGH_TO_LOW"}
              onChange={() => {
                notesDispatch({
                  type: "HIGH_TO_LOW",
                  payload: {
                    sortByPriority: "HIGH_TO_LOW",
                  },
                });
              }}
            ></input>
            High to Low
          </label>
          <label>
            <input
              type="radio"
              name="priority1"
              checked={notesState.sortByPriority === "LOW_TO_HIGH"}
              onChange={() => {
                notesDispatch({
                  type: "LOW_TO_HIGH",
                  payload: {
                    sortByPriority: "LOW_TO_HIGH",
                  },
                });
              }}
            ></input>
            Low to High
          </label>

          <h5>Filter By</h5>
          <label>
            <input
              type="checkbox"
              checked={notesState.priority.LOW}
              name="priority2"
              onChange={() => {
                notesDispatch({
                  type: "LOW",
                });
              }}
            ></input>
            Low
          </label>
          <label>
            <input
              type="checkbox"
              name="priority2"
              checked={notesState.priority.MEDIUM}
              onChange={() => {
                notesDispatch({
                  type: "MEDIUM",
                });
              }}
            ></input>
            Medium
          </label>
          <label>
            <input
              type="checkbox"
              name="priority2"
              checked={notesState.priority.HIGH}
              onChange={() => {
                notesDispatch({
                  type: "HIGH",
                });
              }}
            ></input>
            High
          </label>
        </div>
      )}
    </div>
  );
};
export { Filter };
