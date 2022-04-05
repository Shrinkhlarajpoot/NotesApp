
import { createContext, useContext, useEffect, useReducer } from "react";
import { InitialValues, NotesReducerFun } from "../../reducers/notesReducer";
import {
  deletetrashnoteService,
  editnoteService,
  getarchivenoteService,
  getnotesService,
  gettrashnoteService,
  postarchivenoteService,
  postarchivestotrashService,
  postnotesService,
  posttrashnoteService,
  restorearchivenoteService,
  restoretrashnoteService,
  editarchivenoteService,
  postnotepinService,
 
} from "../services";

import { useAuth } from "./authContext";
const NotesContext = createContext();
const useNotes = () => useContext(NotesContext);

const NotesProvider = ({ children }) => {
  const {
    auth: { token },
  } = useAuth();
  const [notesState, notesDispatch] = useReducer(
    NotesReducerFun,
    InitialValues
  );
  // console.log(notesState.trashList)
  function addnewnoteHandler(note) {
    if (token) {
      (async function () {
        try {
          const { status, data } = await postnotesService(note, token);
          console.log(data, "from new noteHandler");

          if (status === 201) {
            notesDispatch({
              type: "SET_NOTES",
              payload: {
                notesList: data.notes,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }

  function addarchivenoteHandler(e, note) {
    e.stopPropagation();
    if (token) {
      (async function () {
        try {
          const { status, data } = await postarchivenoteService(note, token);
          console.log(data, "from new archivenoteHandler");

          if (status === 201) {
            notesDispatch({
              type: "SET_ARCHIVE_NOTES",
              payload: {
                notesList: data.notes,
                archiveList: data.archives,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }
  function restoreArchiveNote(e, note) {
    e.stopPropagation();
    if (token) {
      (async function () {
        try {
          const { status, data } = await restorearchivenoteService(token, note);
          if (status === 200) {
            notesDispatch({
              type: "SET_ARCHIVE_NOTES",
              payload: {
                notesList: data.notes,
                archiveList: data.archives,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }

  function addNoteToTrashHandler(e, note) {
    e.stopPropagation();
    if (token) {
      (async function () {
        try {
          const { status, data } = await posttrashnoteService(token, note);
          console.log(data,"from tash");

          if (status === 201) {
            notesDispatch({
              type: "SET_TRASH_NOTES",
              payload: {
                notesList: data.notes,
                trashList: data.trash,
                archiveList: data.archives,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }
  function addArchieveToTrashHandler(e, note) {
    e.stopPropagation();
    if (token) {
      (async function () {
        try {
          const { status, data } = await postarchivestotrashService(
            token,
            note
          );
          console.log(data);

          if (status === 201) {
            notesDispatch({
              type: "SET_TRASH_NOTES",
              payload: {
                // notesList: data.notes,
                trashList: data.trash,
                archiveList: data.archives,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }
  function restoreTrashNoteHandler(e, note) {
    e.stopPropagation();
    if (token) {
      (async function () {
        try {
          const { status, data } = await restoretrashnoteService(token, note);
          console.log(data);
          if (status === 200) {
            notesDispatch({
              type: "SET_TRASH_NOTES",
              payload: {
                notesList: data.notes,
                trashList: data.trash,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }

  function deleteTrashNoteHandler(e, note) {
    e.stopPropagation();
    if (token) {
      (async function () {
        try {
          const { status, data } = await deletetrashnoteService(token, note);
          console.log(data, status);
          if (status === 200) {
            notesDispatch({
              type: "SET_TRASH_NOTES",
              payload: {
                trashList: data.trash,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }



  function editNoteHandler(e,note) {
    e.stopPropagation()
    const existInArchive = notesState.archiveList?.find(
      (item) => item._id === note._id
    );
    if (token) {
      (async function () {
        try {
          const { status, data } = existInArchive
            ? await editarchivenoteService(note,token)
            : await editnoteService(token,note);
          console.log(data);
          if (status === 201) {
            existInArchive
              ? notesDispatch({
                  type: "SET_ARCHIVE_NOTES",
                  payload: {
                    archiveList: data.archives,
                  },
                })
              : notesDispatch({
                  type: "SET_NOTES",
                  payload: {
                    notesList: data.notes,
                  },
                });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }

   function togglePinHandler(e, note) {
    e.stopPropagation();
    if (token) {
      (async function(){
      try {
        const { status, data } = await postnotepinService(note, token);
        console.log(data);
        if (status === 200) {
          notesDispatch({
            type: "SET_NOTES",
            payload: { notesList: data.notes },
          });
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }
  }

  
  useEffect(() => {
    if (token) {
      (async function () {
        try {
          const { data, status } = await gettrashnoteService(token);
          console.log(data);
          if (status === 200) {
            notesDispatch({
              type: "GET_TRASH_NOTES",
              payload: {
                trashList: data.trash,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);


  useEffect(() => {
    if (token) {
      (async function () {
        try {
          const { data, status } = await getarchivenoteService(token);
          if (status === 200) {
            notesDispatch({
              type: "GET_ARCHIVE_NOTES",
              payload: {
                archiveList: data.archives,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  useEffect(() => {
    if (token) {
      (async function () {
        try {
          const { data, status } = await getnotesService(token);
          if (status === 200) {
            notesDispatch({
              type: "GET_NOTES",
              payload: {
                notesList: data.notes,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notesState,
        addarchivenoteHandler,
        notesDispatch,
        addnewnoteHandler,
        restoreArchiveNote,
        addNoteToTrashHandler,
        deleteTrashNoteHandler,
        restoreTrashNoteHandler,
        addArchieveToTrashHandler,
        editNoteHandler,
        togglePinHandler,
       
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
export { useNotes, NotesProvider };