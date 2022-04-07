import { useState, useEffect, useRef } from "react";
import { useNotes } from "../../context";
import { ColorPalette } from "../ColorPalette/ColorPalette";
import "./NoteCard.css";
const NoteCard = ({ note }) => {
  const noteCardRef = useRef(null);
  const [toggleColorPallete, setToggleColorPallette] = useState(false);
  const {
    addarchivenoteHandler,
    notesState,
    restoreArchiveNote,
    addNoteToTrashHandler,
    addArchieveToTrashHandler,
    notesDispatch,
    togglePinHandler,
    editNoteHandler,
  } = useNotes();
  const existInArchive = notesState.archiveList?.find(
    (item) => item._id === note._id
  );

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        toggleColorPallete &&
        noteCardRef.current &&
        !noteCardRef.current.contains(e.target)
      ) {
        setToggleColorPallette(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggleColorPallete]);
  function changeColor(e, color) {
    e.stopPropagation();
    editNoteHandler(e, { ...note, bgColor: color });
  }

  // console.log(existInArchive);
  console.log(notesState.isEditing);
  return (
    <div
      style={{ backgroundColor: note.bgColor }}
      className="notescard"
      key={note._id}
      ref={noteCardRef}
      onClick={() => {
        notesDispatch({
          type: "EDIT_NOTE",
          payload: { isEditing: true, editNote: note },
        });
      }}
    >
      {toggleColorPallete ? <ColorPalette changeColor={changeColor} /> : null}
      <div className="title__pin">
        <div className="note__title">{note.title}</div>
        <div
          className={
            Object.keys(note.priority)[0]?.length > 0 && "card__priority"
          }
        >
          {Object.keys(note.priority)[0]}
        </div>
        <span
          class={note.isPinned ? "material-icons" : "material-icons-outlined"}
          onClick={(e) => togglePinHandler(e, note)}
        >
          {existInArchive ? null : "push_pin"}
        </span>
      </div>
      <div
        className="note__desp"
        dangerouslySetInnerHTML={{ __html: note.note }}
      ></div>
      {note.tags.length > 0 && <div className="note__tag">{note.tags}</div>}
      <div className="notecard__desp2">
        <div>{note.createdAt}</div>
        <div className="notescard__btns">
          <span
            class="material-icons-outlined"
            onClick={(e) => {
              e.stopPropagation();
              setToggleColorPallette(!toggleColorPallete);
            }}
          >
            palette
          </span>
          <span
            class="material-icons-outlined"
            onClick={(e) => {
              existInArchive
                ? restoreArchiveNote(e, note)
                : addarchivenoteHandler(e, note);
            }}
          >
            {existInArchive ? "unarchive" : "archive"}
          </span>

          <span
            class="material-icons-outlined"
            onClick={(e) => {
              existInArchive
                ? addArchieveToTrashHandler(e, note)
                : addNoteToTrashHandler(e, note);
            }}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
};
export { NoteCard };
