"Props" refers to the properties being passed into a component in order for it to work correctly, similar to how a function receives parameters: "from above." 
A component receiving props is not allowed to modify those props. (i.e. they are immutable)

function addTwoNumbers(a, b) {
    a = 42
    return a + b
}

console.log(addTwoNumbers(1, 2))

function Navbar(props) {
    props.coverImage = "something else"
}

<Navbar darkMode={true} coverImage="some-image2" />


"State" refers tp values that are managed by the component, similar to variables declared inside a function. Anytime you have changing values that should be saved/displayed, you'll likely be using state.


/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date

function greeting(name) {
    const date = new Date()<State/>
    const hours = date.getHours()</State>
    
    let timeOfDay
    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    
    return `Good ${timeOfDay}, ${name}!`
}

console.log(greeting("Bob"))