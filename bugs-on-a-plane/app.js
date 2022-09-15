const form = document.getElementById('airline-form');
//const submit = document.getElementById('submit');


form.addEventListener('submit' , formAlert )
function formAlert(event){
    var firstName = form.elements['first-name'].value;
    //console.log(firstName)
     var  lastName = form.elements['last-name'].value;
    //console.log(lastName)
    var age = form.elements['age'].value;
    //console.log(age)
    var gender = form.elements['gender'].value;
    //console.log(gender)
    var location = form.elements['travel-location'].value;
    //console.log(location)
    let diet = [];
  //form.addEventListener("submit" , formAlert);
    if (form.elements['vegan'].checked){
        diet.push(document.getElementById('vegan').value);
    }
    if(form.elements['gluten'].checked){
        diet.push(document.getElementById('gluten').value)
    }
    if(form.elements['paleo'].checked){
        diet.push(document.getElementById('paleo').value)
    };
  //all if statement used in case of multiple responses of diet
    alert("First Name: " + firstName + "\nLast Name: "+ lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");

};


///finally it works
