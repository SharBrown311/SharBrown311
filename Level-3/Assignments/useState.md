1.)1. Pass in a new color of your choosing in place of the old one. 
    
    Hint: we don’t care what the previous color was.


const [color, setColor] = useState("pink")

setColor("blue")

2.)Toggle between the colors pink and blue. If the current color is pink, we want to set it blue. If it's currently blue, set it back to pink.

const [color, setColor] = useState('pink')

setColor("blue")

3.)Add a new person object to the following people array in state. You can hard-code a new object but it must be a person object with firstName and lastName properties.

const [people, setPeople] = useState([{
    firstName: "John", 
    lastName: "Smith"
}])
setPeople(prevPeople =>{
    return[
        ...prevPeople, 
        {
            firstName: "Jane", 
            lastName: "Doe"
        }
    ]
})

4.)Change the following state-setting functions to use an implicit return
a.) List

            const [colors, setColors] = setState(["pink", "blue"])
            //explicit return 
                        setColors(...prevColors =>{
                            return [...prevColors, "green"]
                        })
            // implicit return
            setColors(prevColors => [...prevColors, "green"])
b.) List

            const [countObject, setCountObject] = setState({
                count: 
            })

            // explicit return 
            setCountObject(prevState=> {
        	return {
		    count: prevState.count + 1
	}
})

            // implicit return 
            setCountObject(prevState=> ({count: prevState.count + 1}))


5.) Update the following state to add an additional property age and set the value to 30, ensuring that the other properties are not overwritten.

const [person, setPerson] = useState({
    firstName: "John", 
    lastName: "Smith"
})

setPerson(prevState =>{
    ...prevState, 
    age: 30
})

6.)  What’s wrong with the following state update?
Answer: 1. Previous state has been overwritten, and
        2. Data type has changed from an array to a string

        const [colors, setColors] = useState(["pink", "blue"])
        setColors("green")