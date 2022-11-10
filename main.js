var selectedRow = null;

function onFormSubmit(){
    if(validate()){
    var formData = readFormData();
    if(selectedRow == null)
    insertNewRecord(formData);
    else
    updateRecord(formData);
    }
    resetForm();
}

 //document.getElementById("btnSubmit").addEventListener("click", function(event){
   //  event.preventDefault();
   // onFormSubmit();
//});
  

// function onClickAdd(e){
// e.preventDefault();
// onFormSubmit();
// }

function readFormData(){
    var FormData = {};
    FormData["fname"] = document.getElementById("fname").value;
    FormData["lname"] = document.getElementById("lname").value;
    FormData["age"] = document.getElementById("age").value;
    FormData["email"] = document.getElementById("email").value;
    FormData["phone"] = document.getElementById("phone").value;
    return FormData;
}

function insertNewRecord(data){
    var table = document.getElementById("peopleList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.phone;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>`;
}
function resetForm(){
    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("age").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    var selectedRow = null;
}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.lname;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.phone;
}
function onDelete(td){
    row = td.parentElement.parentElement;
    document.getElementById("peopleList").deleteRow(row.rowIndex);
    resetForm();
}
function validate(){
    isValid = true;
    if(document.getElementById('fname').value.length>20){
        isValid=false;
        alert("First Name cannot exceed 20 characters");
        document.getElementById("fname").value ='';
    }
    return isValid;
}
