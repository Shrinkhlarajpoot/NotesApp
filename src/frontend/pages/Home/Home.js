import { useState, useEffect, useRef } from "react";
import {
  ColorPalette,
  EditNoteCard,
  Filter,
  Header,
  NoteCard,
  PriorityPalette,
  Sidebar,
} from "../../components";
import { RichTextEditor } from "../../components/RichTextEditor/RichTextEditor";
import dayjs from "dayjs";
import "./Home.css";
import { useNotes } from "../../context";
import { FinalFilteredSortedItem } from "../../../utils/getFinalFilteredSortedItem";
import { useTheme } from "../../context/themeContext";
const Home = () => {
 const {darkTheme}= useTheme()
  const { addnewnoteHandler, notesState,togglesidebar ,searchItem} = useNotes();
  const noteInputRef = useRef(null);
  const [toggleColorPallete, setToggleColorPallette] = useState(false);
  const [togglePriorityPallete, setTogglePriorityPallette] = useState(false);
  const [toggleLabelInput, setToggleLabelInput] = useState(false);
  const formatDate = () => dayjs().format("DD/MM/YY hh:mm:ss a");
  const [userData, setUserData] = useState({
    title: "",
    note: "<p><br></p>",
    tags: [],
    priority:[],
  });
  const submitFormHandler = (e) => {
    e.preventDefault();
    addnewnoteHandler({ ...userData, createdAt: formatDate() });
    setUserData((data) => ({
      ...data,
      title: "",
      note: "<p><br></p>",
      tags: [],
      priority:[],
    }));
    setToggleLabelInput(false);
    setTogglePriorityPallette(false);
    setToggleColorPallette(false)
  };
  console.log(userData.priority)
  console.log(notesState.sortByDate,"from home sortby")
  const FinalNotesList= FinalFilteredSortedItem(notesState.notesList)
  const PinnedList = FinalNotesList?.filter((item) => item.isPinned);
  const UnPinnedList = FinalNotesList?.filter((item) => !item.isPinned);
  function changeColor(e, color) {
    e.stopPropagation();
    setUserData((data) => ({ ...data, bgColor: color }));
  }
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        (toggleColorPallete || togglePriorityPallete) &&
        noteInputRef.current &&
        !noteInputRef.current.contains(e.target)
      ) {
        setToggleColorPallette(false);
        setTogglePriorityPallette(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggleColorPallete,togglePriorityPallete]);
  return (
    <div class="home__wrapper" >
      {notesState.isEditing && <EditNoteCard editNote={notesState.editNote} />}
      <Header />
      <Filter />
      
      <div className={`main__wrapper ${darkTheme?"darktheme":null}`}>
      {togglesidebar ?<Sidebar />:null}
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
            {toggleLabelInput ? (
              <input
                type="text"
                placeholder="Enter tags"
                className="tag__input"
                value={userData.tags}
                onChange={(e) =>
                  setUserData({ ...userData, tags: e.target.value })
                }
              />
            ) : null}
            <div className="editor__buttons">
              <div className="editor__buttons-start">
                <span
                  class="material-icons-outlined editor__icons"
                  onClick={() => setToggleColorPallette(!toggleColorPallete)}
                >
                  palette
                </span>
                <span
                  class="material-icons-outlined editor__icons"
                  onClick={() => setToggleLabelInput(!toggleLabelInput)}
                >
                  label
                </span>
                <span class="material-icons-outlined" onClick={()=>setTogglePriorityPallette(!togglePriorityPallete)}>signal_cellular_alt</span>
              </div>
              <div className="editor__buttons-end">
                <button
                  className=" btn_sec"
                  type="submit"
                  disabled={
                    userData.title === "" && userData.note === "<p><br></p>"
                  }
                 
                >
                  Add Note
                </button>
               
              </div>
            </div>
            {toggleColorPallete ? (
              <ColorPalette changeColor={changeColor} />
            ) : null}
              {togglePriorityPallete? <PriorityPalette userData={userData} setUserData={setUserData}/>:null}
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
