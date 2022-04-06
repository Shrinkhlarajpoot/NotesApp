import {
  EditNoteCard,
  Header,
  NoteCard,
  Sidebar,
  Filter,
} from "../../components";
import { useNotes } from "../../context";
import "./Labels.css";
const Labels = () => {
  const {
    notesState: { notesList, isEditing, editNote },
  } = useNotes();
  const getLabels = (notesList) => {
    return notesList?.reduce((accum, curr) => {
      if (curr.tags.length > 0) {
        if (!accum.includes(curr.tags)) {
          return [...accum, curr.tags];
        } else {
          return [...accum];
        }
      } else {
        return [...accum];
      }
    }, []);
  };
  const labelList = getLabels(notesList);

  return (
    <div class="home__wrapper">
      {isEditing && <EditNoteCard editNote={editNote} />}

      <Header />
      <Filter />
      <div className="main__wrapper">
        <Sidebar />
        <div className="label__wrapper">
          {labelList?.length > 0
            ? labelList.map((list) => {
                return (
                  <div className="label-wrapper">
                    <h2>{list}</h2>

                    {notesList
                      ?.filter((note) => note.tags === list)
                      .map((item) => (
                        <NoteCard note={item} />
                      ))}
                  </div>
                );
              })
            : <p className="empty__lables">No Labels added!</p>}
        </div>
      </div>
    </div>
  );
};
export { Labels };
