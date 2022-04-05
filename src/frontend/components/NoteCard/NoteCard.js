import { useNotes } from "../../context";
import "./NoteCard.css";
const NoteCard = ({ note }) => {
  const {
    addarchivenoteHandler,
    notesState,
    restoreArchiveNote,
    addNoteToTrashHandler,
    addArchieveToTrashHandler,
  } = useNotes();
  const existInArchive = notesState.archiveList?.find(
    (item) => item._id === note._id
  );
  console.log(existInArchive);
  return (
    <div className="notescard" key={note._id}>
      <div className="title__pin">
        <div className="note__title">{note.title}</div>
        <span class="material-icons-outlined">push_pin</span>
      </div>
      <div
        className="note__desp"
        dangerouslySetInnerHTML={{ __html: note.note }}
      ></div>
      <div className="notecard__desp2">
        <div>{note.createdAt}</div>
        <div className="notescard__btns">
          <span class="material-icons-outlined">palette</span>
          <span class="material-icons-outlined">label</span>
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
