import React from 'react'

import './searchbar.scss'

const SearchBar = (props) => {
  return (
    <div tabIndex="0" className="input_container">
      <input
        className="search-input"
        placeholder="Search For An Item"
        type="text"
        value={props.searchValue}
        onChange={props.handleChange}
        onFocus={() => {
          props.setVisible(true)
        }}
      />

      <div
        ref={props.dropdownRef}
        className={`dropdown ${props.visible ? 'v' : ''}`}
      >
        {props.visible && (
          <ul>
            {props.results &&
              props.results.map((item, index) => (
                <li key={index} className="dropdown_item">
                  <div className="results">
                    <button
                      className="suggestBtn"
                      onClick={() => {
                        props.selectItem(item)
                      }}
                    >
                      <p className="song_text">{item.title}</p>
                      {/* <p className="artist_text">- {item.artists[0].name}</p> */}
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SearchBar
