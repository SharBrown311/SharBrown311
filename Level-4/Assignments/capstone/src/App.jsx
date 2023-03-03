import React from "react"
import FishList from "./assets/Fish/FishList"
import Footer from "./assets/page-components/Footer"
import Header from "./assets/page-components/Header"
import "./App.css"
function App(){

return(
  <div>
  <Header />
  <div className="fish-section">
  <FishList />
  </div>
  <div className="bug-section">
  </div>
  <div className="seaCreature-section">
  </div>
  <Footer />
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