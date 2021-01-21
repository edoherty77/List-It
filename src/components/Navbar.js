import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiHome, mdiPlus } from '@mdi/js'

import SearchBar from './SearchBar'
import ItemModel from '../models/item'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [results, setResults] = useState('')
  const dropdownRef = useRef(null)

  const selectItem = () => {
    console.log('selected item')
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    if (!visible) {
      setVisible(true)
    }
  }

  useEffect(() => {
    async function getData() {
      const info = { searchValue }
      const list = await ItemModel.search(info)
      console.log('DATA: ', list)
      const items = list.data
      setResults(items)
      // console.log('RESULTS: ', results)
    }
    if (searchValue) {
      getData()
    } else {
      setResults(null)
    }
  }, [searchValue])

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="search-div">
          <SearchBar
            dropdownRef={dropdownRef}
            searchValue={searchValue}
            results={results}
            visible={visible}
            setVisible={setVisible}
            selectItem={selectItem}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="nav-right">
        <div className="addIcon-div">
          <Link to="/items/new">
            <Icon className="icon" path={mdiPlus} size={2} color="#2E3131" />
          </Link>
        </div>
        <div className="homeIcon-div">
          <Link to="/">
            {' '}
            <Icon className="icon" path={mdiHome} size={2} color="#fa7c30" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
