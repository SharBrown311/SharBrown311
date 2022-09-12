var form = document.querySelector("form");
var buttonSubmit = document.getElementById("buttonSubmit"); 
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log('clicked')
})
form.formAlert = (e)=> {
    e.preventDefault()
    console.log("we clicked on " + e.target.id);
  var firstName = form.elements["firstName"].value;
  console.log(firstName.value)
  console.log(firstName.value)
  var lastName = form.elements["lastName"].value;
  var age = form.elements["age"].value;
  var gender = form.elements["gender"].value;
  var location = form.elements["travel-location"].value;
  console.log(location)
  var diet = ['vegan', 'gluten', 'paleo'];
  if (form.elements["vegan"].checked) {
    diet.push(document.getElementById("vegan").value);
  }
  if (form.elements["gluten"].checked) {
    diet.push(document.getElementById("gluten").value);
  }
  if (form.elements["paleo"].checked) {
    diet.push(document.getElementById("paleo").value);
  }
console.log(form.value)
  alert(
    "First Name: " +
      firstName +
      " Last Name: " +
      lastName +
      " Age: " +
      age +
      " Gender: " +
      gender +
      " Travel Location: " +
      location +
      " Diet: " +
      diet +
      " Awesome, now if you die, it won't be an accident.."
  );
  
}


