import React, { useState, useEffect } from "react"
import "./style.css"
import base from "../../api/base";

// This component creates the trailer page of the selected movie or series
const TrailerPage = () => {
  const [items, setItems] = useState([]);
  // Declaring data array to be used for data processing
  const trailerDataArray = [];

  // Retrieving records from the Airtable Database
  useEffect(() => {
    base('cinema_lookup')
        .select({view: 'Grid view'})
        .eachPage((records, fetchNextPage) => {
          setItems(records);
          fetchNextPage();
        });
  }, []);

  // Looping through and storing all retrieved data in the data array
  items.forEach((trailerItem) => {
    trailerDataArray.push(trailerItem.fields);
  });

  // Setting a selected movie or series' name from the URL
  // To be used in VALIDATION STEP
  let movieName = document.URL.substring(document.URL.lastIndexOf('/') + 1);
  movieName = movieName.replaceAll('%20', ' ');

  // Setting the name of a movie or series from trailerDataArray
  let name = function () {
    if (trailerDataArray.length > 0) {
      trailerDataArray.filter((i) => {
        // VALIDATION STEP for movie or series name
        if (i.name === movieName) {
          name = i.name;
        }
      });
    }
    return name;
  }

  // Setting the trailer video of a movie or series from trailerDataArray
  let video = function () {
    if (trailerDataArray.length > 0) {
      trailerDataArray.filter((i) => {
        // VALIDATION STEP for movie or series name
        if (i.name === movieName) {
          video = i.video[0].url;
        }
      });
    }
    return video;
  }

  // Setting the description of a movie or series from trailerDataArray
  const description = function () {
    let description = '';
    if (trailerDataArray.length > 0) {
      trailerDataArray.filter((i) => {
        // VALIDATION STEP for movie or series name
        if (i.name === movieName) {
          description = i.description;
        }
      });
    }
    return description;
  }

  // Setting the type of item (movie or series) from trailerDataArray
  const type = function () {
    let type = '';
    if (trailerDataArray.length > 0) {
      trailerDataArray.filter((i) => {
        // VALIDATION STEP for movie or series name
        if (i.name === movieName) {
          type = i.type;
        }
      });
    }
    return type;
  }

  // Setting the genre tags of a movie or series from trailerDataArray
  const tags = function () {
    let tags = '';
    if (trailerDataArray.length > 0) {
      trailerDataArray.filter((i) => {
        // VALIDATION STEP for movie or series name
        if (i.name === movieName) {
          tags = i.tags;
        }
      });
    }
    return tags;
  }

  // Setting the starring actors of a movie or series from trailerDataArray
  const starring = function () {
    let starring = '';
    if (trailerDataArray.length > 0) {
      trailerDataArray.filter((i) => {
        // VALIDATION STEP for movie or series name
        if (i.name === movieName) {
          starring = i.starring;
        }
      });
    }
    return starring;
  }

  // Returning the trailer page with HTML elements and calling appropriate functions
  return (
        <>
          <>
            <section className='trailerPage'>
              <div className='container'>
                <video id='video-element' src={video()} controls></video>
                <div className='para'>
                  <h3>{name()}</h3>
                  <p>{description()}</p>
                  <p1>{type()}</p1>
                  <br/>
                  <p2>{tags()}</p2>
                  <br/>
                  <p3>{starring()}</p3>
                </div>
              </div>
            </section>
          </>
        </>
    )
}

export default TrailerPage
