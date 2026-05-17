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
  for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
  }
}); // <--- The event listener now ends here, safely protecting the loop!