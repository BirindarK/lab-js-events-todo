const toDoList = document.querySelector("#todo-form");
const listedItem = document.querySelector("#list");
const completedItem = document.querySelector("#completed-list");
const button = document.querySelector("#enter");
const showDateButton = document.querySelector(".date");




toDoList.addEventListener("submit", (evt) =>{
    evt.preventDefault();

    //add items to the list
    const newItem = document.createElement("li");
    newItem.innerText = evt.target["new-todo"].value;
    listedItem.appendChild(newItem);

    //created functional delete buttons for each list item
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete")
    deleteButton.innerText = "Delete!";
    listedItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", (evt) => {
       listedItem.removeChild(newItem);
       listedItem.removeChild(deleteButton);
       listedItem.removeChild(completeButton);
    })

    //created functional complete buttons for each list item
    const completeButton = document.createElement("button");
        completeButton.setAttribute("id", "complete");
        completeButton.innerText = "Complete!";
        listedItem.appendChild(completeButton);

    completeButton.addEventListener("click", (evt) => {
        completedItem.appendChild(newItem);
        completeButton.appendChild(deleteButton);
        listedItem.removeChild(completeButton);
        newItem.style.textDecoration = "line-through";
        newItem.style.color = "grey";

    //created functional clear buttons for each completed list item
    const clearButton = document.createElement("button");
        clearButton.setAttribute("id","clear");
        clearButton.innerText = "Clear!";
        completedItem.appendChild(clearButton);

    clearButton.addEventListener("click", (evt) => {
        completedItem.removeChild(newItem);
     completedItem.removeChild(clearButton);
 })

//ensured that the form created list items
button.addEventListener("click", () => {
    console.log("item added to list");
})

    })

})

//created a button to show the current date and time
showDateButton.addEventListener("click", (evt) =>{
    const date = new Date();
    const currentDate = date.toLocaleString();
    console.log(currentDate);
    showDateButton.append(currentDate);


    })






