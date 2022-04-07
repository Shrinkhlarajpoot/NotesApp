const InitialValues = {
  notesList: [],
  archiveList: [],
  trashList: [],
  isEditing: false,
  editNote: { title: "", note: "", tags: [] },
  sortByDate: "",
  sortByPriority: "",
  priority: {
    HIGH: false,
    MEDIUM: false,
    LOW: false,
  },
};

const NotesReducerFun = (notesState, { type, payload }) => {
  switch (type) {
    case "GET_NOTES":
      return { ...notesState, notesList: payload.notesList };
    case "SET_NOTES":
      return { ...notesState, notesList: payload.notesList };
    case "GET_ARCHIVE_NOTES":
      return {
        ...notesState,
        notesList: payload.notesList,
        archiveList: payload.archiveList,
      };
    case "SET_ARCHIVE_NOTES":
      return {
        ...notesState,
        notesList: payload.notesList,
        archiveList: payload.archiveList,
      };
    case "GET_TRASH_NOTES":
      return { ...notesState, trashList: payload.trashList };
    case "SET_TRASH_NOTES":
      return {
        ...notesState,
        trashList: payload.trashList,
        notesList: payload.notesList,
        archiveList: payload.archiveList,
      };
    case "EDIT_NOTE":
      return {
        ...notesState,
        editNote: payload.editNote,
        isEditing: payload.isEditing,
      };
    case "LATEST":
      return { ...notesState, sortByDate: payload.sortByDate };
    case "OLDEST":
      return { ...notesState, sortByDate: payload.sortByDate };
    case "HIGH_TO_LOW":
      return { ...notesState, sortByPriority: payload.sortByPriority };
    case "LOW_TO_HIGH":
      return { ...notesState, sortByPriority: payload.sortByPriority };
    case "HIGH":
      return {
        ...notesState,
        priority: { ...notesState.priority, HIGH: !notesState.priority.HIGH },
      };
    case "LOW":
      return {
        ...notesState,
        priority: { ...notesState.priority, LOW: !notesState.priority.LOW },
      };
    case "MEDIUM":
      return {
        ...notesState,
        priority: {
          ...notesState.priority,
          MEDIUM: !notesState.priority.MEDIUM,
        },
      }
      case "CLEAR_FILTERS" :
        return {
          ...notesState,
          sortByDate: "",
          sortByPriority: "",
          priority: {
            HIGH: false,
            MEDIUM: false,
            LOW: false,
          },

        }
      };
  
};
export { InitialValues, NotesReducerFun };
