//We start it off with creating a new empty array
//our Array will be used to store our guest names
let names = [];
//Lets fetch our form using its ID specified in HTML boilerplate
let form = document.getElementById("myform")
//Lets fetch our ul element using its ID specified in HTML boilerplate
let listy = document.getElementById("guestnames")

form.addEventListener("submit", (e) => {
    //This prevents the browser from reloading
    e.preventDefault()
    let inputValue = document.getElementById("myinput").value.trim()
    //Lets check if the guests are more than ten
    if(names.length >= 10){
        alert("Guest list reached, Kindly remove a guest(s) to be able to add more");
        return;//Exit if the guest list exceeds 10
    }
    //Ensure there is valid input in our inputValue
    if (inputValue === ""){
        alert("Please Enter a valid guest name");
        return;//Ensures that a non empty value is entered
    }
    names.push(inputValue);
    //create an li element to display our inputValues as a list
    let listItem = document.createElement('li');
    //Update our parent element and our new created child element 'li'
    listy.appendChild(listItem);
    listItem.textContent = inputValue;
    //Lets create a button element for deleting any of our input guest:
    let deletebtn = document.createElement("button");
    //Adding an event listener to our button
    deletebtn.addEventListener("click", () =>{
        //Removing the clicked guest from our list
        listy.removeChild(listItem);
        //Updating our array using a filter method
        //our filter method receives a callback of each name and keeps only the elements that satisfy the condition
        //Every name is kept except the one we are deleting
        //names = names.filter(function(name){
        // return name !== inputValue
        //});Lets write its arrow function:
        names = names.filter(name => name !== inputValue);
    })
    deletebtn.textContent = "Remove Guest";
    //Lets append button to the listItem parent
    listItem.appendChild(deletebtn);
    //Lets create a RSVP status(Default as Not Attending)
    //Lets create a span element
    let guestStatus = document.createElement('span');
    guestStatus.textContent = "Not Attending";
    //Update our parent listItem with its new child element guestStatus
    listItem.appendChild(guestStatus);
    //Now lets add a Toggle RSVP button
    let rsvpBtn = document.createElement("button");
    //Display in button Toogle RSVP
    rsvpBtn.textContent = "Toggle RSVP";
    //Finally lets add an eventlistener
    rsvpBtn.addEventListener("click", () => {
        if (guestStatus.textContent === "Not Attending") {
            guestStatus.textContent = "I\'ll be Attending";
        } else {
            guestStatus.textContent = "Not Attending";
        }
    });
    //Lets add our new btn element to our parent element
    listItem.appendChild(rsvpBtn);
})
