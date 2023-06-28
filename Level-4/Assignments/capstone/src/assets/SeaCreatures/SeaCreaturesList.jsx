import {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router'
import './SeaCreatures.css'
function SeaCreaturesList() {
  const navigate = useNavigate()
  const [seaData, setSeaData] = useState([])
  const [checkedSea, setCheckedSea] = useState([])
  const [selectedSea, setSelectedSea] = useState(null)  

  useEffect(() => {
    axios.get('http://acnhapi.com/v1/sea/')
      .then(response => setSeaData(response.data))
      .catch(error => console.log(error))
  }, [])
  const handleCheckboxClick = (seaId) =>{
    if(checkedSea.includes(seaId)){
      setCheckedSea(checkedSea.filter(id => id !== seaId))
    }else{
      setCheckedSea([...checkedSea, seaId])
    }
  }

  useEffect(() => {
    localStorage.setItem('checkedSea', JSON.stringify(checkedSea))
  }, [checkedSea])

  

  const handleSeaClick = (seaId) =>{
    setSelectedSea(seaId)
  }
  
  


return (
    <div className='page-content-list'>
    <div className='nav-buttons'>
    <button onClick={() => navigate('/')}>Return Home</button>
    <button onClick={() => navigate('/fish')}>Fish</button>
    <button onClick={() => navigate('/bugs')}>Bugs</button>
      </div> 
      <div className='left-content-list'>
        {Object.values(seaData).map(sea =>(
          <div className='main-sea-div' key = {sea.id} onClick = {() => handleSeaClick(sea)}>
          <div className='checkbox-container'>
            <label className='checkbox-label'>
              <input className='checkbox'
                     type = 'checkbox'
                    checked = {checkedSea.includes(sea.id)}
                    onChange = {() => handleCheckboxClick(sea.id)} />
            </label>
          </div>
          <div className='name-image-container'>
            <h2 className='sea-name'>{sea.name['name-USen']}</h2>
            <img className='sea-icon' src={sea.icon_uri} alt = {sea.name['name-USen']} />
          </div>
          <div className='sea-listed-details'>
          <p>Price:  ${sea.price}</p>
          <p className='time'> Time available:  {sea.availability.time ? sea.availability.time: 'All Year'}</p>
          <p className='months-available'>Months: {sea.availability['month-array-northern'].join(', ')}</p>
          </div>  
          </div>
        ))}
      </div>
      <div className='right-content-list' >
      {selectedSea && (
        <div className='main-sea-div-2'>
          <div className='name-image-container-2'>
          <h2 className='selectedSea-name'>{selectedSea.name['name-USen']}</h2>
          <img className = 'selectedSea-image'src={selectedSea.image_uri} alt={selectedSea.name['name-USen']} />
          </div>
          <div className='selectedSea-details'>
          <p className='details'><span>Price:</span> ${selectedSea.price}</p>
          <p className='details'><span>Time:</span> {selectedSea.availability.time ? selectedSea.availability.time : 'Available all day'}</p>
          <p className='details'><span>Months Available:</span>  {selectedSea.availability['month-array-northern'].join(', ') }</p>
          <p className='details'><span>Shadow Size:</span>  {selectedSea.shadow}</p>
          <p className='details'><span>Catch Phrase:</span>  {selectedSea['catch-phrase']}</p>
          <p className='details'><span>Museum Catch Phrase:</span>  {selectedSea['museum-phrase']}</p>
          </div>
        </div>
       )}   
      </div>
    </div>
  )
}

export default SeaCreaturesList
