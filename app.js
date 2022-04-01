// import functions

// reference needed DOM elements


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)






const submitToDo = document.getElementById('submitToDo');
const listToDo = document.getElementById('listDiv');


// Make one ul at start of page
const uList = document.createElement('ul');


let newDivNum = 0;

// Grab entryText and add an li to our ul
//create clear and finished button
// both share a class to be cleared by main clear button
submitToDo.addEventListener('click', () => {
    
   
    
    // create div element
    const liDiv = document.createElement('div');
    liDiv.classList = 'formEntry';
    // update newDivNum +1 and change to string for liDiv id 
    newDivNum++;
    var updatedDivNum = newDivNum.toString();
    liDiv.id = updatedDivNum;
    // create li element
    const liToDo = document.createElement('li');
    liToDo.classList = 'formEntry';
    // create button element for clearbtn
    const liClearBtn = document.createElement('input');
    liClearBtn.type = 'button';
    liClearBtn.id = 'clearToDo';
    liClearBtn.value = 'X';
    liClearBtn.classList = 'formEntry';
    //createbutton element for finished btn
    const liFnshBtn = document.createElement('input');
    liFnshBtn.type = 'button';
    liFnshBtn.id = 'FnshBtn';
    liFnshBtn.value = 'Finished?';
    liFnshBtn.classList = 'formEntry';
    //father entryText for next todo
    const addToDo = document.getElementById('entryText').value;
    liToDo.appendChild(document.createTextNode(addToDo));
    
    
    uList.appendChild(liDiv);
    liDiv.appendChild(liToDo);
    liDiv.appendChild(liClearBtn);
    liDiv.appendChild(liFnshBtn);
    listToDo.appendChild(uList);

    
});

//get clear button
const fullClear = document.getElementById('clearBtn');


// get all div and remove them all
fullClear.addEventListener('click',() => {

    const getDiv = document.querySelectorAll('.formEntry');

    getDiv.forEach(div => {
        div.remove();

    });


});
