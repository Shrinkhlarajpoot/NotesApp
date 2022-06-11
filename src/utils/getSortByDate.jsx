const getSortByDate = (noteList, sortByDate) => {
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
