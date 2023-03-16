import {useState, useEffect} from 'react'
import axios from 'axios'
import "./Bugs.css"

import { useNavigate } from 'react-router'



function BugList(){
  const navigate = useNavigate()
  const [bugData, setBugData] = useState([])
  const [checkedBugs, setCheckedBugs] = useState([])
  const [selectedBug, setSelectedBug] = useState(null)

  useEffect(() => {
    axios.get('http://acnhapi.com/v1/bugs/')
      .then(response => setBugData(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleCheckboxClick = (bugId) =>{
    if(checkedBugs.includes(bugId)){
      setCheckedBugs(checkedBugs.filter(id => id !== bugId));
    }else{
      setCheckedBugs([...checkedBugs, bugId])
    }
  }

  useEffect(() =>{
   localStorage.setItem('checkedBugs', JSON.stringify(checkedBugs));
  }, [checkedBugs]);

  const handleBugClick = (bugId) =>{
    setSelectedBug(bugId)
  }
 

  return(
   <div className='page-content-list'>
   <div className= 'nav-buttons'>
   <button onClick={() => navigate('/')}>Return Home</button>
   <button onClick={() => navigate('/fish')}>Fish</button>
   <button onClick={() => navigate('/seaCreatures')}>Sea Creatures</button>
   </div>
   <div className='left-content-list'>
    {Object.values(bugData).map(bug => (
    <div className='main-bug-div' 
     key = {bug.id} onClick = {() => handleBugClick(bug)}>
     <div className='checkbox-container'>
      <label className='checkbox-label'>
        <input className='checkbox'
          type = 'checkbox'
          checked = {checkedBugs.includes(bug.id)}
          onChange = {() => handleCheckboxClick(bug.id)}
        />
      </label>
     </div>
     <div className='name-image-container'>
      <h2 className='bug-name'>{bug.name['name-USen']}</h2>
      <img className='bug-icon' src={bug.icon_uri}  alt = {bug.name['name-USen']}/>
     </div>
     <div className='bug-listed-details'>
     <p>Price: ${bug.price}</p>

     <p>Location: {bug.availability.location}</p>
     <p>Time available: {bug.availability.time ? bug.availability.time: 'All Year'}</p>
     <p>Months Available: {bug.availability['month-array-northern'].join(', ')}</p>
     </div>
      </div>
  ))}
  </div>
    <div className='right-content-list'>
      {selectedBug && (
        <div className='main-bug-div-2'>
          <div className='name-image-container-2'>
            <h2 className='selectedBug-name'>{selectedBug.name['name-USen']}</h2>
            <img className='selectedBug-image' src={selectedBug.image_uri} alt = {selectedBug.name['name-USen']} />
          </div>
          <div className='selectedBug-details'>
          <p className='details'><span>Price:</span> ${selectedBug.price}</p>
          <p className='details'><span>Flick's Price: </span> ${selectedBug['price-flick']}</p>
          <p className='details'><span>Time:</span> {selectedBug.availability.time ? selectedBug.availability.time : 'Available always'}</p>
          <p className='details'><span>Months Available:</span>  {selectedBug.availability['month-array-northern'].join(', ')}</p>
          <p className='details'><span>Catch Phrase:</span>  {selectedBug['catch-phrase']}</p>
          <p className='details'><span>Museum Catch Phrase:</span>  {selectedBug['museum-phrase']}</p>

          </div>
        </div>
      )}
    </div>
    </div>
  )
}
export default BugList