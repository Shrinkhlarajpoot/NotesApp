import { useState } from "react";
import { useNotes } from "../../context";
import { ColorPalette } from "../ColorPalette/ColorPalette";
import { PriorityPalette } from "../PriorityPalette/PriorityPalette";
import { RichTextEditor } from "../RichTextEditor/RichTextEditor";

import "./EditNoteCard.css";

const EditNoteCard = ({ editNote }) => {
  const { notesState, notesDispatch, editNoteHandler } = useNotes();
  const [editForm, setEditForm] = useState(editNote);
  const [bg, setBg] = useState(editForm.bgColor);
  const [toggleColorPallete, setToggleClrPallette] = useState(false);
  const [togglePriorityPallete, setTogglePriorityPallette] = useState(false);
  function changeColor(e, color) {
    e.stopPropagation();
    setBg(color);
    setEditForm({ ...editForm, bgColor: color });
  }
  console.log(editForm, "from edit");
  const submitEditFormHandler = (e) => {
    e.preventDefault();
    editNoteHandler(e, editForm);
    notesDispatch({
      type: "EDIT_NOTE",
      payload: {
        isEditing: false,
        editNote: editNote,
      },
    });
  };
  console.log(toggleColorPallete);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };
  return (
    <div class="editnote__container--form">
      <form
        className="home__container--form  edit__form"
        onSubmit={(e) => submitEditFormHandler(e)}
        style={{ backgroundColor: bg }}
      >
        <input
          className="notes__editor-title"
          placeholder="Title"
          value={editForm.title}
          name="title"
          onChange={(e) => {
            changeHandler(e);
          }}
        ></input>
        <RichTextEditor
          value={editForm.note}
          setValue={(e) => setEditForm((prev) => ({ ...prev, note: e }))}
        ></RichTextEditor>
        <input
          value={editForm.tags}
          name="tags"
          className="tag__input"
          onChange={(e) => changeHandler(e)}
          placeholder="Enter tag"
        ></input>
        <div className="editor__buttons">
          <div className="editor__buttons-start">
            <span
              class="material-icons-outlined"
              onClick={() => setToggleClrPallette((prev) => !prev)}
            >
              palette
            </span>
            <span class="material-icons-outlined" onClick={()=>setTogglePriorityPallette(!togglePriorityPallete)}>signal_cellular_alt</span>
            {toggleColorPallete ? (
              <ColorPalette changeColor={changeColor} />
            ) : null}
            {togglePriorityPallete ? <PriorityPalette userData={editForm} setUserData={setEditForm}/>:null}
          </div>
          <div className="editor__buttons-end">
            <button
              className=" btn_sec "
              type="submit"
              onClick={() => {
                notesDispatch({
                  type: "EDIT_NOTE",
                  payload: {
                    isEditing: false,
                    editNote: editNote,
                  },
                });
              }}
            >
              Cancel
            </button>
            <button className=" btn_sec " type="submit">
              Add Note
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export { EditNoteCard };
