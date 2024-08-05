import React, {useEffect, useState} from "react"
import "./home.css"
import Home from "./Home"
import base from "../../api/base";

const Homes = () => {
    const [items, setItems] = useState([]);
    // Declaring home card data array to be used for data processing
    const homeCardDataArray = [];

    // Retrieving records from the Airtable Database
    useEffect(() => {
        base('home page')
            .select({view: 'Grid view'})
            .eachPage((records, fetchNextPage) => {
                setItems(records);
                fetchNextPage();
            });
    }, []);

    // Looping through and storing all retrieved data in homeCardDataArray
    items.forEach((item) => {
        homeCardDataArray.push(item.fields);
    });


    // Returns the HomeCard with the passed in homeCardDataArray
    return (
        <>
            <section className='home'>
                <Home items={homeCardDataArray}/>
            </section>
            <div className='category-margin'></div>
        </>
    )
}

export default Homes
