import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./categories.css"
import UCards from "./CCards";
const Categories = ({ items, title}) => {
  // Slider Arrow Properties
  const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
          <button className='next'>
            <i class='fa fa-chevron-right'></i>
          </button>
        </div>
    )
  }
  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
          <button className='prev'>
            <i class='fa fa-chevron-left'></i>
          </button>
        </div>
    )
  }

  // Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  // Returns the 3 UCards for the Movie or Series Categories (Recommended, Upcoming, Popular)
  return (
    <>
      <section className='upcome'>
        <div className='container'>
          <div className='heading flexSB'>
            <h1>{title}</h1>
          </div>
          <div className='content'>
            <Slider {...settings}>
              {items.map((item) => {
                return (
                    <>
                      <UCards key={item.id} item={item} />
                    </>
                )
              })}
            </Slider>
          </div>
        </div>
      </section>
      </>
  )
}

export default Categories
