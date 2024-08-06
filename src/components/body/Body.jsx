import React, {useEffect, useState} from "react"
import "./body.css"
import base from "../../api/base";
import Slider from "react-slick";

// This component creates the body of the Movies and Series pages
const Body = () => {
    const [items, setItems] = useState([]);

    // Retrieving records from the Airtable Database
    useEffect(() => {
        base('cinema_lookup')
            .select({view: 'Grid view'})
            .eachPage((records, fetchNextPage) => {
                setItems(records);
                fetchNextPage();
            });
    }, []);

    // Declaring data arrays to be used for data processing
    const dataArray = [];
    const seriesArray = [];
    const moviesArray = [];

    // Slider Arrow Properties
    const SampleNextArrow = (props) => {
        const {onClick} = props
        return (
            <div className='control-btn' onClick={onClick}>
                <button className='pages-next'>
                    <i class='fa fa-chevron-right'></i>
                </button>
            </div>
        )
    }
    const SamplePrevArrow = (props) => {
        const {onClick} = props
        return (
            <div className='control-btn' onClick={onClick}>
                <button className='pages-prev'>
                    <i class='fa fa-chevron-left'></i>
                </button>
            </div>
        )
    }

    // Slider Settings
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: { max: 200, min: 0 },
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                },
            },
        ],
    }

    // Looping through and storing all retrieved data in the data array
    items.forEach((movie) => {
        dataArray.push(movie.fields);
    });

    // Pushing relevant items to their relevant array (movies / series)
    dataArray.forEach((item) => {
        // If item type is Series, push the item to seriesArray
        if (item.type === "Series") {
            seriesArray.push(item);
        }
        // If item type is Movie, push the item to moviesArray
        if (item.type === "Movie") {
            moviesArray.push(item);
        }
    });

    // Body returns HTML elements
    return (
        <div link='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'>
            {/* A function is called to return the HTML elements*/}
            {getSeriesPage()}
        </div>
    )

    // Function for returning HTML elements after validating its type (movies / series) from the URL
    function getSeriesPage() {
        if (document.URL.includes("series")) {
            return (
                <body className='space'>
                <div className='marg'>
                    <Slider {...settings}>
                        {seriesArray.map((item) => {
                            return (
                                <>
                                    <div className='MovieBox margin-for-pages'>
                                        <div className='img'>
                                            <img src={item.cover[0].url} alt=''/>
                                        </div>
                                        <div className='text-box'>
                                            <h3>{item.name}</h3>
                                            <section className='search-item-info-genre-tags bold'>{item.tags}</section>
                                            <section className='search-item-info-description'>{item.starring}</section>
                                            <a href={`/trailerpage/${item.name}`}>
                                                <button id='play-button'>
                                                    <div className='fa fa-play no-border'></div>
                                                    PLAY TRAILER
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </Slider>
                </div>
                </body>
            )
        } else if (document.URL.includes("movies")) {
            return (
                <body className='space'>
                <div className='marg'>
                    <Slider {...settings}>
                    {moviesArray.map((item) => {
                            return (
                                <>
                                    <div className='MovieBox margin-for-pages'>
                                        <div className='img'>
                                            <img src={item.cover[0].url} alt=''/>
                                        </div>
                                        <div className='text-box'>
                                            <h3>{item.name}</h3>
                                            <section className='search-item-info-genre-tags bold'>{item.tags}</section>
                                            <section className='search-item-info-description'>{item.starring}</section>
                                            <a href={`/trailerpage/${item.name}`}>
                                                <button id='play-button'>
                                                    <div className='fa fa-play no-border'></div>
                                                    PLAY TRAILER
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </Slider>
                </div>
                </body>
            )
        }
    }
}

export default Body