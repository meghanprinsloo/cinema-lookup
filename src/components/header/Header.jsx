import React, {useEffect, useState} from "react"
import "./header.css"
import base from "../../api/base";

// This component creates the header of the website
const Header = () => {
  const [Mobile, setMobile] = useState(false)
  const [items, setItems] = useState([]);
  // Declaring header data array to be used for data processing
  const headerDataArray = [];

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
  items.forEach((item) => {
    headerDataArray.push(item.fields);
  });

  // Function for filtering matched header data from the text input field
  function filter() {
    const searchList = document.getElementById('search-list');
    const resultGrid = document.getElementById('result-grid');
    let textInput = document.getElementById('text-input');

    // Guarding against null values
    if (textInput !== null && resultGrid.innerHTML !== null && searchList.innerHTML !== null) {
      // Event listener for key up events in the text input field
      textInput.addEventListener('keyup', (event) => {
          headerDataArray.some(item => {
            // If a match is found, then build the resultGrid of the search
            if ((item.name).toLowerCase().includes(textInput.value)) {

              // Get stars from integer stored rating
              function getStars(rating): HTMLElement {
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

              // Creating the resultGrid HTML
              resultGrid.innerHTML = `
                <div class='search-item-info'>
                     <p class='search-item-info-heading'>${item.name}</p>
                     <p class='search-item-info-ratings'>${getStars(item.rating)}</p>
                     <p class='search-item-info-genre-tags'>${item.tags}</p>
                     <p class='search-item-info-description'>${item.description}</p>
                     <p class='search-item-info-starring'>Starring: ${item.starring}</p>
                     <img class='search-item-image' src='${item.cover[0].url}'/>
                </div>
              `;
              searchList.innerHTML.concat(resultGrid.innerHTML);
            }

            // If the text input field is empty, clear the resultGrid HTML and its elements
            if (textInput.value === "") {
              resultGrid.innerHTML = ``;
            }

          });
      });
    }
  }

  // This returns the header HTML and elements
  return (
      <>
        <header>
          <div className='container flexSB'>
            <nav className='flexSB'>
              <div className='logo'>
                <img src='./images/img/logo.png' alt=''/>
              </div>
              <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/series'>Series</a>
                </li>
                <li>
                  <a href='/movies'>Movies</a>
                </li>
              </ul>
              <button className='toggle' onClick={() => setMobile(!Mobile)}>
                {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
              </button>
            </nav>
            <span>
              <section className='form-control'>
                <input onKeyUp={filter()} class="form-control hide-search-bar" type="text" id="text-input" placeholder="Search Movie / Series"/>
                <div className="search-list" id="search-list"></div>
                <div className="result-grid" id="result-grid">
                  {/* Matched search items are to be display here */}
                </div>
              </section>
            </span>
          </div>
        </header>
      </>
  )
}

export default Header
