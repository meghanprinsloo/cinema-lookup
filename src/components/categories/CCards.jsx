import React from "react"

// Returns the Category Cards for the sliders per movie or series category (Recommended, Upcoming, Popular)
const CCards = ({ item: { cover, name, starring, genre }}) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={cover[0].url} alt='' />
        </div>
        <div className='text'>
          <h3>{name}</h3>
          <span className='genre'>{genre}</span> <br/>
          <span className='starring'>{starring}</span> <br/>
          <a href={`/trailerpage/${name}`}>
            <button className='primary-btn'>
              <i className='fa fa-play'></i> PLAY TRAILER {/* For all home items */}
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default CCards
