import React, { useRef, useEffect } from 'react'
import './searchbar.scss'

const SearchBar = (props) => {
  //Hiding dropdown on outside click logic
  const node = useRef()
  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick)
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    props.setVisible(false)
  }
  return (
    <div className="input_container" ref={node}>
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
          <ul className="dropdown_list">
            {props.results &&
              props.results.map((item, index) => (
                <li key={index} className="dropdown_item">
                  <div className="results">
                    <p
                      onClick={() => {
                        props.selectItem(item)
                      }}
                      className="item_text"
                    >
                      {item.title} - ${item.price}
                    </p>
                  </div>
                </li>
              ))}
            {props.results === null ? (
              ''
            ) : (
              <li className="none">No More Matches</li>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SearchBar
