import "./Trash.css";
import { Filter, Header, TrashCard, Sidebar } from "../../components";
import { useNotes } from "../../context";
const Trash = () => {
  const { notesState } = useNotes();
  return (
    <div class="home__wrapper">
      <Header />
      <Filter />
      <div className="main__wrapper">
        <Sidebar />
        <div className=" trash__wrapper">
          {notesState.trashList?.map((note) => (
            <TrashCard key={note._id} note={note} />
          ))}
          {notesState.trashList?.length === 0 && (
            <p className="empty__lables">No Trash added!</p>
          )}
        </div>
      </div>
    </div>
  );
};
export { Trash };
