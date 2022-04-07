const getFilterByPriority = (notelist, HIGH, MEDIUM, LOW) => {
   const filteredlist = [];
  if (HIGH === false && MEDIUM === false && LOW === false) {
    return notelist;
  }
  if (HIGH) {
    let newlist =  notelist?.filter((note) => Object.values(note.priority)[0] === "3");
    filteredlist.push(...newlist);
  }
  if (LOW) {
    let newlist= notelist?.filter((note) => Object.values(note.priority)[0] === "1");
    filteredlist.push(...newlist);
  }
  if (MEDIUM) {
    let newlist= notelist?.filter((note) => Object.values(note.priority)[0] === "2");
    filteredlist.push(...newlist);
  }
  return filteredlist;
};
export { getFilterByPriority };
