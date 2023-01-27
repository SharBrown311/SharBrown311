import React, { useState, useEffect } from "react";
import "./App.css";
function MemeGenerator() {
  const [userInput, setUserInput]=useState( {
    topText: "",
    bottomText: "",
    image: "",
  })
  const [randomImg, setRandomImg] = useState("");
  const [allMemes, setAllMemes] = useState([]);
  const [generatedMemes, setGeneratedMemes] = useState([]);
  
  function fetchRandomMeme(){
        const randomNum = Math.floor(Math.random() * Math.floor(allMemes.length));
        const randomImage= allMemes[randomNum].url
           setRandomImg(randomImage);
         console.log(randomImage)
    };
  const fetchMeme = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) =>
       setAllMemes(response.data.memes),
      )
      .catch(); 
      setRandomImg();
  };
  useEffect(() => {
    fetchMeme()
  },[]);
  function handleChange(event) {
    const { name, value } = event.target;
    setUserInput(prevUserInput =>({
        ...prevUserInput,
        [name]:value
    }))
     
}
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setGeneratedMemes((prevGeneratedMemes) => ({
      ...prevGeneratedMemes,
      
        topText: userInput.topText,
        bottomText: userInput.bottomText,
        image: userInput.image,
    
    }));
    console.log(generatedMemes);
  };
  const userMeme= generatedMemes.map(meme => 
<div>
       <h2>{generatedMemes.topText}</h2> 
       <h2>{generatedMemes.bottomText}</h2> 
       <img src={generatedMemes.image} alt="text"></img>
</div>
    )
  return (
      <div>
        <h2>Create your meme</h2>
        <form className="memeForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={generatedMemes.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={generatedMemes.bottomText}
            onChange={handleChange}
          />
          <button>Refresh Generator</button>
          <button type="submit">Generate your Meme </button>
          <img className="memeImg" src={randomImg} alt="" />
        </form>
        
        <h2>List of Memes</h2>
       
{userMeme}
 
      <div className="meme">
        </div>
        </div>
        )}
export default MemeGenerator
