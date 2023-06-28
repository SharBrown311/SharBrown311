import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router'
import SideBar from './SideBar'
function Home() {
  const navigate = useNavigate()
  return (
    <div className='home-body-container'>
    <div className='sidebar--menu'>
    <div className='menu'>
      <SideBar />
    </div>
    <div className='main'>
      <h4 className='main-title'>About</h4>
      <p className = "main-text"style={{textAlign: 'left', paddingLeft: "1rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pharetra vel turpis nunc. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Ante metus dictum at tempor. Mi eget mauris pharetra et ultrices. In fermentum et sollicitudin ac orci phasellus egestas tellus. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Leo a diam sollicitudin tempor id eu nisl nunc mi. Accumsan tortor posuere ac ut consequat semper viverra. Gravida rutrum quisque non tellus. Ultricies lacus sed turpis tincidunt id aliquet. Sit amet dictum sit amet.
    <br/>
    <br/>
      Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Ut diam quam nulla porttitor massa id. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. A iaculis at erat pellentesque adipiscing commodo. Cursus euismod quis viverra nibh. Id faucibus nisl tincidunt eget nullam. Ornare suspendisse sed nisi lacus sed. Arcu risus quis varius quam quisque id diam. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Arcu non odio euismod lacinia at. Eget nunc scelerisque viverra mauris in aliquam. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Sed velit dignissim sodales ut eu sem.
      <br/>
      <br/>
      Amet est placerat in egestas erat imperdiet sed. Fermentum iaculis eu non diam phasellus vestibulum lorem. Eros in cursus turpis massa. Sed adipiscing diam donec adipiscing tristique risus. Et tortor consequat id porta nibh venenatis cras sed. In mollis nunc sed id semper risus. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Et malesuada fames ac turpis egestas maecenas pharetra. Convallis a cras semper auctor neque vitae tempus. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Faucibus a pellentesque sit amet porttitor. Morbi quis commodo odio aenean sed adipiscing diam donec. Egestas tellus rutrum tellus pellentesque. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Libero id faucibus nisl tincidunt eget nullam non nisi. Morbi tristique senectus et netus et malesuada fames. Dui ut ornare lectus sit amet est. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.
      <br />
      <br />
      Sed libero enim sed faucibus. Sed faucibus turpis in eu. Morbi tristique senectus et netus et malesuada fames ac turpis. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Egestas maecenas pharetra convallis posuere. Sed risus pretium quam vulputate dignissim. Purus semper eget duis at. Non arcu risus quis varius quam quisque id diam. Augue mauris augue neque gravida in fermentum. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Ipsum consequat nisl vel pretium. Non sodales neque sodales ut etiam sit amet. Erat imperdiet sed euismod nisi porta.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pharetra vel turpis nunc. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Ante metus dictum at tempor. Mi eget mauris pharetra et ultrices. In fermentum et sollicitudin ac orci phasellus egestas tellus. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Leo a diam sollicitudin tempor id eu nisl nunc mi. 
  </p>
      </div>
      <div className='right'>
      <button className = "fish-button"onClick={() => navigate('/fish')}>Fish</button>
      <button className='bugs-button' onClick={() => navigate('/bugs')}>Bugs</button>
      <button className = "seaCreatures-button" onClick={() => navigate('/seaCreatures')}>Sea <br />Critters</button>
      </div>
    </div>
    </div>
  )
}

export default Home
 


// DONE












