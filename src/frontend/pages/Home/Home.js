
import { useState } from "react";
import { ColorPalette, Filter, Header, NoteCard, Sidebar } from "../../components";
import { RichTextEditor } from "../../components/RichTextEditor/RichTextEditor";
import dayjs from "dayjs";
import "./Home.css";
import { useNotes } from "../../context";
const Home = () => {
  const {addnewnoteHandler,notesState}=useNotes()
  const formatDate = () => dayjs().format("DD/MM/YY hh:mm:ss a");
  const[userData,setUserData]=useState({
    title:"",
    note:"<p><br></p>",
  })
  const submitFormHandler = (e) =>{
    e.preventDefault();
    addnewnoteHandler({...userData,createdAt: formatDate()});
    setUserData({title:"",note: "<p><br></p>"})
    }
 return (
    <div class="home__wrapper">
      <Header />
      <Filter/>
      <div className="main__wrapper">
        <Sidebar />
        <div className="main__wrapper-notes">
          <form className="notes__editor" onSubmit={(e)=>submitFormHandler(e)} >
            <input
              className="notes__editor-title"
              placeholder="Title..."
              value={userData.title}
              onChange={(e)=>setUserData({...userData,title:e.target.value})}
            ></input>
            <RichTextEditor 
            value={userData.note}
            setValue={(e) => setUserData({ ...userData, note: e })}
            />
            <div className="editor__buttons">
              <div className="editor__buttons-start">
                <span class="material-icons-outlined editor__icons">palette</span>
                <span class="material-icons-outlined editor__icons" >label</span>
              </div>
              <div className="editor__buttons-end">
                <button className=" btn_sec" type="submit">
                  Add Note
                </button>
              </div>
            </div>
            <ColorPalette/>
          </form>
        
          <div className="notes__wrapper">
            {notesState.notesList?.map((note)=>
            <NoteCard key={note._id} note={note}/>)}
          </div>

        </div>
        </div>
        </div>
    )
}
export {Home}