var n = 1;

//Onsubmit of the form values the values must be appended to the table

function addRow() {
  var tbl = document.getElementById("table");
  var row = tbl.insertRow(n);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);

  cell1.innerHTML = document.getElementById("first-name").value;
  cell2.innerHTML = document.getElementById("last-name").value;
  cell3.innerHTML = document.getElementById("address").value;
  cell4.innerHTML = document.getElementById("pincode").value;
  cell7.innerHTML = document.getElementById("state").value;
  cell8.innerHTML = document.getElementById("country").value;

  
  // Checking Radio Button values
  var checkRadio = document.querySelector('input[name="gender"]:checked');
  if (checkRadio != null) {
    cell5.innerHTML = checkRadio.value;
  } else {
    cell5.innerHTML = "Please Select Any Gender";
  }

  //Checking Checkbox values
  const checkBoxes = document.querySelectorAll('input[name="food"]:checked');
  let values = [];
  checkBoxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  
  cell6.innerHTML = values;
  
  //must choose at least 2 out of 5 options
  var checkboxes = document.getElementsByName("food");
  var numberOfCheckedItems = 0;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) numberOfCheckedItems++;
  }
  if (numberOfCheckedItems < 2) {
    alert("You can't select less than two items");
    return false;
  }
  //Clearing the form fields after updating the record to table.
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
}
