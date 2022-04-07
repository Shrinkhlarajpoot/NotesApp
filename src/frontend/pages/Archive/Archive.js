import "./Archive.css"
import { ColorPalette, EditNoteCard, Filter, Header, NoteCard, Sidebar } from "../../components";
import { useNotes } from "../../context";
import { FinalFilteredSortedItem } from "../../../utils/getFinalFilteredSortedItem";
import { useTheme } from "../../context/themeContext";
const Archive = () =>{
  const {darkTheme}= useTheme()
 
 const {notesState:{archiveList,editNote,isEditing},togglesidebar} =useNotes()
 const FinalArchiveList=FinalFilteredSortedItem(archiveList)
    return (
        <div class="home__wrapper">
          {isEditing&&<EditNoteCard editNote={editNote}/>}
              <Header />
              <Filter/>
              <div   className={`main__wrapper ${darkTheme?"darktheme":null}`}>
              {togglesidebar ?<Sidebar />:null}
                <div  className={`trash__wrapper ${darkTheme?"darktheme":null}`} >
                  {FinalArchiveList?.length === 0 && <p className="empty__lables">No Archives added!</p>}
                    {FinalArchiveList?.map((note)=>
                    <NoteCard key={note._id} note={note}/>)}
                    
                 
              </div>
           
            </div>
            </div>
    )
}
export {Archive}