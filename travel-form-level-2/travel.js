const form = document.getElementById('airline-form');



form.addEventListener('submit' , formAlert )
function formAlert(event){
    var firstName = form.elements['first-name'].value;
    
     var  lastName = form.elements['last-name'].value;
   
    var age = form.elements['age'].value;
   
    var gender = form.elements['gender'].value;
   
    var location = form.elements['travel-location'].value;
    
    let diet = [];
  
    if (form.elements['vegetarian'].checked){
        diet.push(document.getElementById('vegetarian').value);
    }
    if(form.elements['kosher'].checked){
        diet.push(document.getElementById('kosher').value)
    }
    if(form.elements['lactose-free'].checked){
        diet.push(document.getElementById('lactose').value)
    };
  
    alert("First Name: " + firstName + "\nLast Name: "+ lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet);

};