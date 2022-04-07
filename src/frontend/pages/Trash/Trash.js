import "./Trash.css";
import { Filter, Header, TrashCard, Sidebar } from "../../components";

import { useNotes } from "../../context";
import { FinalFilteredSortedItem } from "../../../utils/getFinalFilteredSortedItem";
import { useTheme } from "../../context/themeContext";
const Trash = () => {
  const {
    notesState: { trashList },
    togglesidebar,
    searchItem,
  } = useNotes();
const {darkTheme}= useTheme()
  const FinalTrashList = FinalFilteredSortedItem(trashList);
  return (
    <div class="home__wrapper">
      <Header />
      <Filter />
      <div   className={`main__wrapper ${darkTheme?"darktheme":null}`}>
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
