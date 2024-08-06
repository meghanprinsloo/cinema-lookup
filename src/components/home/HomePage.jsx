import Upcomming from "../categories/Categories"
import {useEffect, useState} from "react";
import base from "../../api/base";
import Homes from "./Homes";

// This component creates the entire Home Page in sections
const HomePage = () => {
    // Declaring data arrays to be used for data processing
    const [items, setItems] = useState([]);
    const homeDataArray = [];
    let recommended = [];
    let upcoming = [];
    let popular = [];

    // Retrieving records from the Airtable Database
    useEffect(() => {
        base('cinema_lookup')
            .select({view: 'Grid view'})
            .eachPage((records, fetchNextPage) => {
                setItems(records);
                fetchNextPage();
            });
    }, []);

    // Looping through and storing all retrieved data in homeDataArray
    items.forEach((movie) => {
        homeDataArray.push(movie.fields);
    });

    // Pushing relevant items to their relevant array (recommended, upcoming, popular)
    recommended = homeDataArray.filter((item) => item.category === 'Recommended');
    upcoming = homeDataArray.filter((item) => item.category === 'Upcoming');
    popular = homeDataArray.filter((item) => item.category === 'Popular');


  return (
    <>
      <Homes/> {/* Eventually returns HomeCard */}
      <Upcomming items={recommended} title='Recommended'/> {/* Returns Recommended items in a slider component */}
      <Upcomming items={upcoming} title='Upcoming'/> {/* Returns Upcoming items in a slider component */}
      <Upcomming items={popular} title='Popular'/> {/* Returns Popular items in a slider component */}
    </>
  )
}


export default HomePage
