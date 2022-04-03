import { ColorPalette, Filter, Header, NoteCard, Sidebar } from "../../components";
import { RichTextEditor } from "../../components/RichTextEditor/RichTextEditor";
import "./Home.css";
const Home = () => {
  return (
    <div class="home__wrapper">
      <Header />
      <Filter/>
      <div className="main__wrapper">
        <Sidebar />
        <div className="main__wrapper-notes">
          <form className="notes__editor" >
            <input
              className="notes__editor-title"
              placeholder="Title..."
            ></input>
            <RichTextEditor />
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
              <NoteCard/>
              <NoteCard/>
              <NoteCard/>
          </div>
        </div>
      </div>
   
    </div>
  );
};
export { Home };
