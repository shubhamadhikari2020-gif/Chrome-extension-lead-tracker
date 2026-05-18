let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value); // Pushes input values into myLeads array
  renderLead()
  inputEl.value=""
})

function renderLead(){
  let listItem="<li>"+ inputEl.value +"</li>"
  ulEl.innerHTML += listItem
}
