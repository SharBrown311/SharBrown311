// creates built in XML Request
const xhr = new XMLHttpRequest();

// Collects data from API
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const jsonData = xhr.responseText;
    const data = JSON.parse(jsonData);
    const pokemon = data.objects[0].pokemon
    myFunct(pokemon)
  }
};
// Get info from API / URL /  true = Asynchronous
xhr.open("GET", "https://api.vschool.io/pokemon", true);
// Request Run
xhr.send();
// The function that adds parts of the data to the HTML page
myFunct = pokemon => {
  for (let i = 0; i < pokemon.length; i++) {
    let newH3 = document.createElement("h3")
    newH3.innerHTML += pokemon[i].name.toUpperCase()
    document.body.append(newH3)
  }
}

