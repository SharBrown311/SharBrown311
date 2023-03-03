import {useState, useEffect} from 'react'
import axios from 'axios'
import "./Bugs.css"
import RarityStars from '../Fish/FishRarityStars'




function BugList(){
  const [bugData, setBugData] = useState([])
  const [checkedBugs, setCheckedBugs] = useState([])
  const [selectedBugs, setSelectedBugs] = useState(null)

  useEffect(() =>{
    axios.get('http://acnhapi.com/v1/bugs/')
    .then(response => setBugData(response.data))
    .catch(error => console.log(error))
  }, [])

  const handleCheckboxClick = (bugId) => {
    if(checkedBugs.includes(bugId)){
      setCheckedBugs(checkedBugs.filter(id => id !== bugId))
    }else{
      setCheckedBugs([...checkedBugs, bugId])
    }
  }
  useEffect(() => {
    localStorage.setItem('checkedBugs', JSON.stringify
    (checkedBugs))
  }, [checkedBugs])
  const handleBugClick = (bugId) => {
    setSelectedBugs(bugId)
  }
  return(
    <div className='page-content-list'>
      <div className='left-content-list'>
        {Object.values(bugData).map(bug => {
          <div className='main-bug-div' key = {bug.id} onClick = {() => handleBugClick(bug)}>
            <div className='checkbox-container'>
              <label className='checkbox-label'>
                <input className='checkbox'
                       type='checkbox'
                       checked = {checkedBugs.includes(bug.id)}
                       onChange = {() => handleCheckboxClick(bug.id)}
                />  
                Caught
              </label>
              </div>
              <div className='name-image-container'>
                <h2 className='bug-name'>{bug.name['name-USen']}/</h2>
                <img className='bug-icon' src={bug.icon_uri} alt = {bug.name['name-USen']} />
              </div>
              <div className='bug-listed-details'>
                <p>Price: ${bug.price}</p>
                <p>Location: {bug.availability.location}</p>
                <p>Time available: {bug.availability.time ? bug.availability.time: 'All Year'}</p>
                <p>Months Available: {bug.availability['month-array-northern'].join(', ')}</p>
              </div>
          </div>
        })}
      </div>
      <div className='flipp-image-container'>
        <img className='flipp-image' src='/src/assets/Images/flippImage.jpeg' alt = 'Flipp! Lover of Bugs and Professional Trapper'/>
        <div className='right-content-list'>
          {selectedBugs &&(
            <div className='main-bug-div-2'>
              <div className='name-image-container-2'>
                <h2 className='selectedBug-name'>{selectedBugs.name['name-USen']}</h2>
                  <img className='selectedBug-image' src={selectedBugs.image_uri} alt = {selectedBugs.name['name-USen']}/>
              </div>
              <div className='selectedBug-details'>
              <p className='details'><span>Price:</span> ${selectedBugs.price}</p>
              <p className='details'><span>CJ Price:</span>  ${selectedBugs['price-flipp']} </p>
              <p className='details'><span>Location: </span> {selectedBugs.availability.location}</p>
              <p className='details'><span>Time:</span> {selectedBugs.availability.time ? selectedBugs.availability.time : 'Available always'}</p>
              <p className='details'><span>Months Available:</span>  {selectedBugs.availability['month-array-northern'].join(', ')}</p>
              <p className='details'><span>Catch Phrase:</span>  {selectedBugs['catch-phrase']}</p>
              <p className='details'><span>Museum Catch Phrase:</span>  {selectedBugs['museum-phrase']}</p>
              <RarityStars rarity={selectedBugs.availability.rarity} />
              </div>    
            </div>
          )}
        </div>  
      </div>
    </div>
  )
}
export default BugList