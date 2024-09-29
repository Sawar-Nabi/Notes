const notes_container = document.querySelector(".notes_container");
const button = document.querySelector("button");
let notes = document.querySelectorAll(".input_box");

const updateStorage = () => {
  localStorage.setItem("notes", notes_container.innerHTML);
};

const showNotes = () => {
  notes_container.innerHTML = localStorage.getItem("notes");
};

showNotes();

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});

button.addEventListener("click", (e) => {
  let p = document.createElement("p");
  let img = document.createElement("img");
  p.className = "input_box";
  p.setAttribute("contenteditable", "true");
  img.src = "../imgs/delete.png";
  notes_container.appendChild(p).appendChild(img);
});

notes_container.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    const notes = document.querySelectorAll(".input_box");
    notes.forEach((note) => {
      note.onkeyup = () => {
        updateStorage();
      };
    });
  }
});
