const InitialValues = {
    notesList: [],
    archiveList: [],
    trashList: [],
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
    }
  };
  export { InitialValues, NotesReducerFun };