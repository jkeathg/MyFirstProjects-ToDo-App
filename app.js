// import functions

// reference needed DOM elements


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)

const addToDo = document.getElementById("addToDo").value;
const submitToDo = document.getElementById("submitToDo");

const listToDo = document.getElementById("listDiv");
const oList = document.createElement("ol");

const liToDo = document.createElement("li");
liToDo.appendChild(document.createTextNode(addToDo));
oList.appendChild(liToDo);




submitToDo.addEventListener("click",() => {
    
    listToDo.appendChild(oList);
});
