import { ColorPalette } from "../ColorPalette/ColorPalette";
import "./NoteCard.css";
const NoteCard = () => {
  return (
    <div className="notescard">
      <div className="title__pin">
        <div className="note__title">Note Title</div>
        <span class="material-icons-outlined">push_pin</span>
      </div>
      <div className="note__desp">This is a Note </div>
      <div className="notecard__desp2">
        <div>22/05/20202</div>
        <div className="notescard__btns">
          <span class="material-icons-outlined">palette</span>
          <span class="material-icons-outlined">label</span>
          <span class="material-icons-outlined">archive</span>
          <span class="material-icons-outlined">delete</span>
        </div>
      </div>
     
    </div>
  );
};
export { NoteCard };
