let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value); // Pushes input values into myLeads array
  console.log(myLeads);
  inputEl.value = "";
  ulEl.innerHTML = ""; // Clears the previous list items from the screen

  // Moving the loop INSIDE so it triggers every time the button is clicked!
  let listItems= " "
  for (let i = 0; i < myLeads.length; i++) {
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

    //OTHER METHOD FOR THE ABOVE LINE:
    //const li= document.createElement("li")
    //li.textContent=myLeads[i]
    //ulEl.append(li)
    listItems += "<li>"+ myLeads[i] +"</li>"
  }
  ulEl.innerHTML= listItems;
});   
