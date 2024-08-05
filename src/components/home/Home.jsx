import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HomeCard from "./HomeCard"

// This component creates the home page's top slider item (HomeCard)
const Home = ({ items }) => {

    // Slider Arrow Properties
    const SampleNextArrow = (props) => {
        const { onClick } = props
        return (
            <div className='control-btn' onClick={onClick}>
                <button className='homecard-next'>
                    <i class='fa fa-chevron-right'></i>
                </button>
            </div>
        )
    }
    const SamplePrevArrow = (props) => {
        const { onClick } = props
        return (
            <div className='control-btn' onClick={onClick}>
                <button className='homecard-prev'>
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
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    // This returns the slider's HomeCard items
    return (
        <>
        <div className='homeContainer'>
            <Slider {...settings}>
            {items.map((item) => {
                return (
                <>
                <HomeCard key={item.id} item={item} />
                </>
                )
            })}
            </Slider>
        </div>
        </>
    )
}

export default Home
