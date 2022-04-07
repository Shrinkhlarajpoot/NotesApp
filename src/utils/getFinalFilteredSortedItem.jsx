import { useNotes } from "../frontend/context"
import { getFilterByPriority } from "./getFilterByPriority"
import { getFilterBySearch } from "./getFilterBySearch"
import { getSortByDate } from "./getSortByDate"
import { getSortByPriority } from "./getSortByPriority"


const FinalFilteredSortedItem=(list)=>{
 const {notesState,searchItem}=useNotes()
    const filterBySearch= getFilterBySearch(list,searchItem)
    const sortedDateList=getSortByDate(filterBySearch,notesState.sortByDate)
    const sortedPriorityList= getSortByPriority(sortedDateList,notesState.sortByPriority)
    const FinalNotesList=  getFilterByPriority (sortedPriorityList,notesState.priority.HIGH, notesState.priority.MEDIUM,notesState.priority.LOW)
    return FinalNotesList
}
export {FinalFilteredSortedItem}