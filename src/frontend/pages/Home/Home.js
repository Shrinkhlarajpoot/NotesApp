import { useState, useEffect, useRef } from "react";
import {
  ColorPalette,
  EditNoteCard,
  Filter,
  Header,
  NoteCard,
  Sidebar,
} from "../../components";
import { RichTextEditor } from "../../components/RichTextEditor/RichTextEditor";
import dayjs from "dayjs";
import "./Home.css";
import { useNotes } from "../../context";
const Home = () => {
  const { addnewnoteHandler, notesState } = useNotes();
  const noteInputRef = useRef(null);
  const [toggleColorPallete, setToggleColorPallette] = useState(false);
  const formatDate = () => dayjs().format("DD/MM/YY hh:mm:ss a");
  const [userData, setUserData] = useState({
    title: "",
    note: "<p><br></p>",
   
  });
  const submitFormHandler = (e) => {
    e.preventDefault();
    addnewnoteHandler({ ...userData, createdAt: formatDate() });
    setUserData((data) => ({ ...data, title: "", note: "<p><br></p>" }));
  };
  const PinnedList = notesState.notesList?.filter((item) => item.isPinned);
  const UnPinnedList = notesState.notesList?.filter((item) => !item.isPinned);
  function changeColor(e, color) {
    e.stopPropagation();
    setUserData((data) => ({ ...data, bgColor: color }));
  }
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        toggleColorPallete &&
        noteInputRef.current &&
        !noteInputRef.current.contains(e.target)
      ) {
        setToggleColorPallette(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggleColorPallete]);
  return (
    <div class="home__wrapper">
      {notesState.isEditing && <EditNoteCard editNote={notesState.editNote} />}
      <Header />
      <Filter />
      <div className="main__wrapper">
        <Sidebar />
        <div className="main__wrapper-notes">
          <form
            className="notes__editor"
            onSubmit={(e) => submitFormHandler(e)}
            style={{ backgroundColor: userData.bgColor }}
            ref={noteInputRef}
          >
            <input
              className="notes__editor-title"
              placeholder="Title..."
              value={userData.title}
              onChange={(e) =>
                setUserData({ ...userData, title: e.target.value })
              }
            ></input>
            <RichTextEditor
              value={userData.note}
              setValue={(e) => setUserData({ ...userData, note: e })}
            />
            <div className="editor__buttons">
              <div className="editor__buttons-start">
                <span
                  class="material-icons-outlined editor__icons"
                  onClick={() => setToggleColorPallette(!toggleColorPallete)}
                >
                  palette
                </span>
                <span class="material-icons-outlined editor__icons">label</span>
              </div>
              <div className="editor__buttons-end">
                <button className=" btn_sec" type="submit">
                  Add Note
                </button>
              </div>
            </div>
            {toggleColorPallete ? (
              <ColorPalette changeColor={changeColor} />
            ) : null}
          </form>

          <div class="notes__wrapper">
            {PinnedList?.length ? (
              <h3 className="pinned__list">Pinned List</h3>
            ) : null}
            {PinnedList?.map((note) => (
              <NoteCard note={note} key={note._id} />
            ))}
          </div>
          <div class="notes__wrapper">
            {UnPinnedList?.map((note) => (
              <NoteCard note={note} key={note._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export { Home };
