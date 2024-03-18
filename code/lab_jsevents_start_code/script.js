const toDoList = document.querySelector("#todo-form");
const listedItem = document.querySelector("#list");
const button = document.querySelector("#enter");

toDoList.addEventListener("submit", (evt) =>{
    evt.preventDefault();
    //add items to the list

    const newItem = document.createElement("li");
    newItem.innerText = evt.target["new-todo"].value;
    listedItem.appendChild(newItem);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete!";
    listedItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", (evt) => {
       listedItem.removeChild(newItem);
       listedItem.removeChild(deleteButton);
    })

  
})

button.addEventListener("click", () => {
    console.log("item added to list");
})











