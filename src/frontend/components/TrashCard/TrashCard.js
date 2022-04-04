import { useNotes } from "../../context";
import "./TrashCard.css";
const TrashCard = ({ note }) => {
  const { deleteTrashNoteHandler, restoreTrashNoteHandler } = useNotes();
  return (
    <div className="notescard" key={note._id}>
      <div className="title__pin">
        <div className="note__title">{note.title}</div>
      </div>
      <div
        className="note__desp"
        dangerouslySetInnerHTML={{ __html: note.note }}
      ></div>
      <div className="notecard__desp2">
        <div>{note.createdAt}</div>
        <div className="notescard__btns">
          <span
            class="material-icons-outlined"
            onClick={(e) => restoreTrashNoteHandler(e, note)}
          >
            restore_from_trash
          </span>
          <span
            class="material-icons-outlined"
            onClick={(e) => deleteTrashNoteHandler(e, note)}
          >
            delete_forever
          </span>
        </div>
      </div>
    </div>
  );
};
export { TrashCard };