let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// 1. PERSISTENCE ON REFRESH: Fetch saved leads from localStorage when the page loads
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// 2. If there are leads in storage, restore them back into our array and display them
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

inputBtn.addEventListener("click", function() {
    // 3. Push the new input value into the array
    myLeads.push(inputEl.value);
    
    // 4. Clear out the input field right away
    inputEl.value = "";
    
    // 5. SAVING: Save the updated array to localStorage as a string
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    
    // 6. Call the function to redraw the UI
    renderLeads();
});

// 7. Dedicated function to handle rendering the UI cleanly
function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
    }
    // Replaces the HTML content of the ul element all at once
    ulEl.innerHTML = listItems;
}