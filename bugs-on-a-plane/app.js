const form = document.getElementById("airlineForm");
const buttonSubmit = document.getElementById("buttonSubmit");
console.log(airlineForm)
airlineForm.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('clicked')
})
function formAlert (event){
  event.preventDefault()
  let firstName = form.elements.firstName.value;
     firstName.value = ''
    // console.log(firstName.value)
  let lastName = form.elements.lastName.value;
  let age = form.elements.age.value;
  let gender = form.elements.gender.value;
  let travelLocation = form.elements.travelLocation.value;
  console.log(travelLocation)
  var diet = ['vegan', 'gluten', 'paleo'];
  if (form.elements.diet[0].checked) {
    diet.push(document.querySelector("vegan").value);
  }
  else if (form.elements.diet[1].checked) {
    diet.push(document.querySelector("gluten").value);
  }
  else if (form.elements.diet[2].checked) {
    diet.push(document.querySelector("paleo").value);
  }
  console.log(form.elements.value)
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
    travelLocation +
    " Diet: " +
    diet +
    " Awesome, now if you die, it won't be an accident.."
    
  );

}


