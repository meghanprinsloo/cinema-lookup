import React from "react"

// This component builds and constructs the HomeCard HTML and its elements
const HomeCard = ({ item: { cover, name, rating, time, description, starring, genre, tags } }) => {

  // Get stars from integer stored rating
  function getStars(rating){
    switch (rating) {
      case 1:
        return `★`;
      case 2:
        return '★ ★'
      case 3:
        return '★ ★ ★'
      case 4:
        return '★ ★ ★ ★'
      case 5:
        return '★ ★ ★ ★ ★'
      default:
        break;
    }
  }

  // HTML and elements are returned
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover[0].url} alt='' />
        </div>
        <div className='content flex'>
          <div className='details'>
            <h1>{name}</h1>
            <div className='rating flex'>
              <label class='search-item-info-ratings-bigger'>{getStars(rating)} (Imdb)</label>
              <span>GP</span>
              <label>{time}</label>
            </div>
            <p>{description}</p>
            <div className='cast'>
              <h4>
                <span>Starring </span>
                {starring}
              </h4>
              <h4>
                <span>Genres </span>
                {genre}
              </h4>
              <h4>
                <span>Tags </span>
                {tags}
              </h4>
            </div>
          </div>
          <div className='playButton row'>
            {/* Routes to the trailer page once the play button is clicked */}
            <a href={`/trailerpage/${name}`}>
              <button id='home-card-play-button'>
                <div className='img'>
                  <img src='./images/img/play-button.png' alt=''/>
                </div>
                WATCH TRAILER
              </button>
          </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard
