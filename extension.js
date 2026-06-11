let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value); // Pushes input values into myLeads array
  //wrapping the lead in an anchor tag (<a>) inside <li>
  // so that the link open the link
  ulEl.innerHTML += `<li>
                        <a tagret='_blank' href='${inputEl.value}'>
                            ${inputEl.value} 
                       </a>
                     </li>`;
  inputEl.value=""
})

