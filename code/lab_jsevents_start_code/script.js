const toDoList = document.querySelector("#todo-form");
const listedItem = document.querySelector("#list");
const completedItem = document.querySelector("#completed-list");
const button = document.querySelector("#enter");
const showDateButton = document.querySelector(".date");
const hideDateButton = document.querySelector(".date");
const completeToDoList = document.querySelector


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
       listedItem.removeChild(completeButton);
    })

    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete!";
    listedItem.appendChild(completeButton);

    completeButton.addEventListener("click", (evt) => {
        completedItem.appendChild(newItem);
        completeButton.appendChild(deleteButton);
        listedItem.removeChild(completeButton);
    
       
    })

})



button.addEventListener("click", () => {
    console.log("item added to list");
})

showDateButton.addEventListener("click", (evt) =>{
    const date = new Date();
    const currentDate = date.toLocaleString();
    console.log(currentDate);
    showDateButton.append(currentDate)

})






   


















