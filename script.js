const name = document.querySelector("#Name");
const id = document.querySelector("#id");
const mail = document.querySelector("#mail");
const contact = document.querySelector("#contact");
const terms = document.querySelector("#terms");
const button = document.querySelector("#SubmitButton");
        


button.addEventListener("click", addToTable);

function addToTable() {
    if (name.value === '' || id.value === '' || mail.value === '' || contact.value === '') return;
    const row = document.createElement("tr");
    row.classList.add("table-row");
    row.innerHTML = `
    <td class="table-cell">${name.value}</td>
    <td class="table-cell">${id.value}</td>
    <td class="table-cell">${mail.value}</td>
    <td class="table-cell">${contact.value}</td>
    <td class="table-cell action-buttons">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    </td>`;
    const tbody = document.querySelector(".tbody"); 
    tbody.appendChild(row);
    name.value = '';
    id.value = '';
    mail.value = '';
    contact.value = '';
    const deleteButtons = row.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", deleteItem);
    });
    const editButtons = row.querySelectorAll(".edit-btn");
    editButtons.forEach(button => {
        button.addEventListener("click", editItems);
    });
}
function deleteItem(e) {
    const item = e.target;
    if (item.classList.contains("delete-btn")) {
        const parentRow = item.closest("tr");
        parentRow.remove();
    }
}
function deleteItemm(e) {
    const item = e.target;
    if (item.classList.contains("edit-btn")) {
        const parentRow = item.closest("tr");
        parentRow.remove();
    }
}
function editItems(e){
    const items = e.target;
    if (items.classList.contains("edit-btn")){
        const name=prompt("Enter your name:");
        const id=prompt("Enter your Id:");
        const Mail=prompt("Enter your Mail ID:");
        const contact=prompt("Enter your Contact:");
        localStorage.setItem("name",name);
        localStorage.setItem("id",id);
        localStorage.setItem("mail",Mail);
        localStorage.setItem("contact",contact);
        deleteItemm(e);
        const nameNew=localStorage.getItem("name");
        const idNew=localStorage.getItem("id");
        const mailNew=localStorage.getItem("mail");
        const contactNew=localStorage.getItem("contact");
        const rowNew = document.createElement("tr");
                
        rowNew.classList.add("table-row");
        rowNew.innerHTML = `
        <td class="table-cell">${nameNew}</td>
        <td class="table-cell">${idNew}</td>
        <td class="table-cell">${mailNew}</td>
        <td class="table-cell">${contactNew}</td>
        <td class="table-cell action-buttons">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </td>`;
        const tbody = document.querySelector(".tbody"); 
        tbody.appendChild(rowNew);
    }
}