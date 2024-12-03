const notepad = document.getElementById("notepad");
const saveNotesButton = document.getElementById("save-notes");
const clearNotesButton = document.getElementById("clear-notes");

// Load saved notes from localStorage when the page loads
window.addEventListener("load", () => {
    const savedNotes = localStorage.getItem("notepadContent");
    if (savedNotes) {
        notepad.value = savedNotes;
    }
});

// Save the notes to localStorage
saveNotesButton.addEventListener("click", () => {
    localStorage.setItem("notepadContent", notepad.value);
    alert("Notes saved!");
});

// Clear the notepad and localStorage
clearNotesButton.addEventListener("click", () => {
    localStorage.removeItem("notepadContent");
    notepad.value = "";
    alert("Notes cleared!");
});
