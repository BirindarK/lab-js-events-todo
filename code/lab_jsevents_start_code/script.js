const toDoList = document.querySelector("#todo-form");
const listedItem = document.querySelector("#list");
const button = document.querySelector("#enter");


button.addEventListener("click", () => {
    console.log("item added to list");
})

toDoList.addEventListener("submit", (evt) =>{
    evt.preventDefault();
    const newItem = document.createElement("li");
    newItem.innerText = evt.target["new-todo"].value;
    listedItem.appendChild(newItem);
})



