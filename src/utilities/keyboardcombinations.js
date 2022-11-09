const  keyboardcombinations = {
    ctrlShiftArrowDown: (e) => (e.metaKey || e.ctrlKey) && e.shiftKey && e.key === "ArrowDown",
    escapeChar: (e) => (e.metaKey || e.ctrlKey) && e.shiftKey && e.key === "U"


}

export  {keyboardcombinations}