import "./Review.css"
import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'
import { FaStar } from 'react-icons/fa'
function UserReview({name, picture, review, stars}) {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      picture: "https://tse3.mm.bing.net/th?id=OIP.isMiRzNuox6kx5IuWDJO3QHaHa&pid=Api&P=0&h=180",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus ornare suspendisse sed. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Aliquet eget sit amet tellus. Habitant morbi tristique senectus et netus et malesuada fames.",
      stars: 4,
    },
    {
      id: 2,
      name: "Jane Doe",
      picture: "https://tse3.mm.bing.net/th?id=OIP.isMiRzNuox6kx5IuWDJO3QHaHa&pid=Api&P=0&h=180",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus ornare suspendisse sed. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Aliquet eget sit amet tellus. Habitant morbi tristique senectus et netus et malesuada fames.",
      stars: 5,
    },
    {
      id: 3, 
      name: "John Doe",
      picture:  "https://tse3.mm.bing.net/th?id=OIP.isMiRzNuox6kx5IuWDJO3QHaHa&pid=Api&P=0&h=180",
      review:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus ornare suspendisse sed. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Aliquet eget sit amet tellus. Habitant morbi tristique senectus et netus et malesuada fames.",
      stars: 5
  
    }
  ]
  


return (
  <CarouselProvider
      naturalSlideWidth={150}
      naturalSlideHeight={90}
      totalSlides={3}
      children
      className="carousel-container"
      visibleSlides={1}
      isPlaying={true}
      infinite={true}
      interval={6000}
  
  >
    <Slider className= "slider-carousel">
      {reviews.map((data , index) => 
        (<Slide index={index} data={data} key={index} className="slide-carousel">
          <div className="card">
       
          <div className="card-body">
          <img className="card-image" src = {data.picture}  alt = {data.name} />
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data.review}</p>
              <h6 className = "user-ratings">{data.stars}<FaStar className="star" /></h6>
          </div>
          </div>
        </Slide>))
        }
    </Slider>
        <div className="button-container">
      <ButtonBack className="carouselButt previous">⮈
      </ButtonBack>
      <ButtonNext className="carouselButt next">⮊
      </ButtonNext>
      </div>
  </CarouselProvider>
  );
}
export default UserReview