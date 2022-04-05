import "./Archive.css"
import { ColorPalette, Filter, Header, NoteCard, Sidebar } from "../../components";
import { useNotes } from "../../context";
const Archive = () =>{
 const {notesState:{archiveList}} =useNotes()
    return (
        <div class="home__wrapper">
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