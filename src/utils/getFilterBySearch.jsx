const getFilterBySearch = (noteList, searchItem) => {
    if (searchItem) {
     return  [...noteList].filter((note) =>
        (note.title.toLowerCase().includes(searchItem.toLowerCase().trim()) || note.note.toLowerCase().includes(searchItem.toLowerCase().trim()))
      );
    } else {
      return noteList;
    }
  };
  export { getFilterBySearch };