import React from "react"
import {Route, Routes} from 'react-router-dom'
import FishList from "./assets/Fish/FishList"
import BugList from "./assets/Bugs/BugList"
import SeaCreaturesList from "./assets/SeaCreatures/SeaCreaturesList"
import "./App.css"
import Home from "./assets/page-components/Home"
import Footer from './assets/page-components/Footer'
import Header from "./assets/page-components/Header"
function App(){

return(
  <div className="App">
  <div>
  <Header/>
  <Routes>
    <Route index path="/" element = {<Home />} />
    <Route path="/fish" element = {<FishList />} />
    <Route path="/bugs" element = {<BugList />} />
    <Route path="/seaCreatures" element = {<SeaCreaturesList />}/>
  </Routes>
  <Footer />
  </div>
  </div>
)

}
export default App


















// function App() {
//   const [fish, setFish] = useState([])  // const [caughtFish, setCaughtFish] = useState([])

//   useEffect(() => {
//     axios.get("http://acnhapi.com/v1/fish")
//       .then(response => {
//         setFishList(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);
  
//   // const handleCaughtChange = (id, caught) => {
//   //   if(caught){
//   //     setCaughtFish([...caughtFish, id])
//   //   }else{
//   //     setCaughtFish(caughtFish.filter((fishId) => fishId !== id))
//   //   }
//   // };

//   return (
  
//       <div className="App">
//         <div>
//           {fishList.map((item , id) => {
//             return (<li key={id})>{item}</li>
//           })}
//         </div>
//       </div>
  
//   );
// }

// export default App;