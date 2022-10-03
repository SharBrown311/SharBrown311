var button = document.getElementById("submitItem");
submitItem.innerHTML = "Submit"; //submit button
var list = document.getElementById("list"); //ul
var form = document.getElementById("listForm");

console.log("form var: ", form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem();
});

var addItem = function () {
  var text = txtValu.value;
  txtValu.value = "";
  var li = document.createElement("li");
  li.innerHTML = text;
  var br = document.createElement("br");
  list.appendChild(li);
  li.append(br);

  var buttonDelete = document.createElement("button");
  buttonDelete.addEventListener("click", deleteItem);

  function deleteItem(e) {
    console.log("delete was called");
    li.remove();
  }
  var buttonEdit = document.createElement("button");
  buttonDelete.innerHTML = "X";
  buttonEdit.innerHTML = "Edit";
  buttonDelete.style.height = "30px";
  buttonDelete.style.width = "43.09px";
  buttonDelete.style.backgroundColor = "red";
  buttonEdit.style.height = "30px";
  buttonEdit.style.width = "43.09px";
  buttonEdit.style.backgroundColor = "blue";
  li.appendChild(buttonDelete);
  li.appendChild(buttonEdit);
  buttonEdit.addEventListener("click", function () {
    li.contentEditable = true;
    li.style.backgroundColor = "blue";
  });
};
