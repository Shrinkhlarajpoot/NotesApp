import "./Archive.css"
import { ColorPalette, EditNoteCard, Filter, Header, NoteCard, Sidebar } from "../../components";
import { useNotes } from "../../context";
const Archive = () =>{
 const {notesState:{archiveList,editNote,isEditing}} =useNotes()
    return (
        <div class="home__wrapper">
          {isEditing&&<EditNoteCard editNote={editNote}/>}
              <Header />
              <Filter/>
              <div className="main__wrapper">
                <Sidebar />
                <div className="archive__wrapper">
                    {archiveList?.map((note)=>
                    <NoteCard key={note._id} note={note}/>)}
                    
                 
              </div>
           
            </div>
            </div>
    )
}
export {Archive}