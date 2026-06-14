let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn"); //delete feature 

// 1. PERSISTENCE ON REFRESH: Fetch saved leads from localStorage when the page loads
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage)

// 2. If there are leads in storage, restore them back into our array and display them
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

deleteBtn.addEventListener("dblclick",function(){ //dblclick triggers with double click
    localStorage.clear() //localStorage.clear() only wipes the browser's permanent storage. It does not
    //  automatically clear the temporary variables running in your JavaScript file. If you skipped this line,
    //  program would still hold onto the old links in its working memory until you refreshed the page.

    myLeads=[] //assigns a brand-new, completely empty array ([]) to your myLeads variable.
    render(myLeads) //Inside renderLeads(), you have a loop that builds HTML based on whatever is currently inside myLeads. 
    // Because you just set myLeads = [] on the line right above it, the loop finds nothing to loop through. As a result, 
    // listItems remains an empty string (""), and ulEl.innerHTML = listItems; clears all the list items off your screen.
})

inputBtn.addEventListener("click", function() {
    if(inputEl.value){ //this if condition make sure any empty string is not passed into myLeads() array
    // 3. Push the new input value into the array
        myLeads.push(inputEl.value);
    
    // 4. Clear out the input field right away
        inputEl.value = "";
    
    // 5. SAVING: Save the updated array to localStorage as a string
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
    
    // 6. Call the function to redraw the UI
        render(myLeads);
    }
});

// 7. Dedicated function to handle rendering the UI cleanly
function render() {
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