import {useState, useEffect} from 'react'
import axios from 'axios';
import './Fish.css'
import RarityStars from '../page-components/RarityStars'
import { useNavigate } from 'react-router';


function FishList() {
  const navigate = useNavigate()
  const [fishData, setFishData] = useState([]);
  const [checkedFish, setCheckedFish] = useState([]);
  const [selectedFish, setSelectedFish] = useState(null)
  // useEffect hook to fetch data from the API
  useEffect(() => {
    axios.get('http://acnhapi.com/v1/fish/')
      .then(response => setFishData(response.data))
      .catch(error => console.log(error));
  }, []);

  // function to handle checkbox clicks and update the checkedFish state
  const handleCheckboxClick = (fishId) => {
    if (checkedFish.includes(fishId)) {
      setCheckedFish(checkedFish.filter(id => id !== fishId));
    } else {
      setCheckedFish([...checkedFish, fishId]);
    }
  }

  // function to save the checkedFish state to local storage
  useEffect(() => {
    localStorage.setItem('checkedFish', JSON.stringify(checkedFish));
  }, [checkedFish]);

//function to handle fish click and update the selectedFish State

const handleFishClick = (fishId) => {
  setSelectedFish(fishId)
}
  

  return (
      <div className='page-content-list'>
      <div className= 'nav-buttons'>
      <button onClick={() => navigate('/')}>Return Home</button>
      <button onClick={() => navigate('/bugs')}>Bugs</button>
      <button onClick={() => navigate('/seaCreatures')}>Sea Creatures</button>
      </div>
    <div className='left-content-list'>
      {Object.values(fishData).map(fish => (
        <div className = 'main-fish-div' key={fish.id} onClick = {() => handleFishClick(fish)}>
        <div> <input 
        className='checkbox'
            type="checkbox" 
            checked={checkedFish.includes(fish.id)}
            onChange={() => handleCheckboxClick(fish.id)}
          /></div>
      <div className='name-image-container'>
          <h2 className='fish-name'>{fish.name['name-USen']}</h2>
          <img className = "fish-icon"src={fish.icon_uri} alt={fish.name['name-USen']} />
          </div>
          <div className='fish-listed-details'>
          <p>Price:  ${fish.price}</p>
          <p className='location'>Location: {fish.availability.location}</p>
          <p className='time'> Time available:  {fish.availability.time ? fish.availability.time: 'All Day'}</p>
          <p className='months-available'>Months: {fish.availability['month-array-northern'].join(', ')}</p>
          </div>  
        </div>
        ))}
        </div>
      <div className='cj-image-container'>
      <i className='fas fa-camera-retro'></i>
      <br/>
      <img className = 'cj-image'src = '/src/assets/Images/cjImage.jpeg' alt = "CJ Fishing and Fish Expert"/>
      </div>
      <div className='right-content-list' >
      {selectedFish && (
        <div className='main-fish-div-2'>
          <div className='name-image-container-2'>
          <h2 className='selectedFish-name'>{selectedFish.name['name-USen']}</h2>
          <img className = 'selectedFish-image'src={selectedFish.image_uri} alt={selectedFish.name['name-USen']} />
          </div>
          <div className='selectedFish-details'>
          <p className='details'><span>Price:</span> ${selectedFish.price}</p>
          <p className='details'><span>CJ Price:</span>  ${selectedFish['price-cj']} </p>
          <p className='details'><span>Location: </span> {selectedFish.availability.location}</p>
          <p className='details'><span>Time:</span> {selectedFish.availability.time ? selectedFish.availability.time : 'Available all day'}</p>
          <p className='details'><span>Months Available:</span>  {selectedFish.availability['month-array-northern'].join(', ')}</p>
          <p className='details'><span>Shadow Size:</span>  {selectedFish.shadow}</p>
          <p className='details'><span>Catch Phrase:</span>  {selectedFish['catch-phrase']}</p>
          <p className='details'><span>Museum Catch Phrase:</span>  {selectedFish['museum-phrase']}</p>
          <RarityStars rarity= {selectedFish.availability.rarity} />
          </div>
        </div>
      )}
      </div>
      </div>
      );
}
export default FishList