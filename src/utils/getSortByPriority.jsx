const getSortByPriority = (notelist, sortByPriority)=>{
    if( sortByPriority==="HIGH_TO_LOW"){
        return [...notelist].sort((a,b)=>Object.values(b.priority)[0] - Object.values(a.priority)[0])
    }
    if( sortByPriority==="LOW_TO_HIGH"){
        return [...notelist].sort((a,b)=>Object.values(a.priority)[0] - Object.values(b.priority)[0])
    }
    return notelist
  
}
export {getSortByPriority}