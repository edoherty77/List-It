import React from 'react'
import { Link } from 'react-router-dom'
import './searchbar.scss'

const SearchBar = (props) => {
  return (
    <div className="input_container">
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
                    {/* <p
                      onClick={() => {
                        props.selectItem(item)
                      }}
                      className="item_text"
                    >
                      {item.title}
                    </p> */}
                    <Link to={`/items/${item._id}`}>{item.title}</Link>
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
