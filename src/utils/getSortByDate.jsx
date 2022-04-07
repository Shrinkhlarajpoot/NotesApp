const getSortByDate = ( noteList, sortByDate ) => {
    console.log(sortByDate,"from fun sortByDate")
    
  if (sortByDate === "LATEST") {
    return [...noteList].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }
  if (sortByDate === "OLDEST") {
    return [...noteList]?.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }
  return noteList;

};
export { getSortByDate };
