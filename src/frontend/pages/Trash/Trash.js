import "./Trash.css";
import { Header, TrashCard, Sidebar } from "../../components";
import { useNotes } from "../../context";
import { FinalFilteredSortedItem } from "../../../utils/getFinalFilteredSortedItem";

const Trash = () => {
  const {
    notesState: { trashList },
    togglesidebar,
    searchItem,
  } = useNotes();
const FinalTrashList = FinalFilteredSortedItem(trashList);
  return (
    <div class="home__wrapper">
      <Header />
     <div   className="main__wrapper">
        {togglesidebar ? <Sidebar /> : null}
        <div className=" trash__wrapper">
          {FinalTrashList?.map((note) => (
            <TrashCard key={note._id} note={note} />
          ))}
          {FinalTrashList?.length === 0 && (
            <p className="empty__lables">No Trash added!</p>
          )}
        </div>
      </div>
    </div>
  );
};
export { Trash };
