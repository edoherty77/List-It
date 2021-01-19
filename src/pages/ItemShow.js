import React, { useEffect, useState } from 'react'
import ItemModel from '../models/item'
import Item from '../components/Item'

const ItemShow = (props) => {
  const [item, setItem] = useState('')
  const urlId = props.match.params.id

  const goBack = () => {
    props.history.push('/')
  }

  const deleteItem = async (props) => {
    await ItemModel.delete(urlId)
    goBack()
  }

  const fetchData = () => {
    ItemModel.show(urlId).then((data) => setItem(data.item))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="item-div">
      <Item {...item} deleteItem={deleteItem} goBack={goBack} />
    </div>
  )
}

export default ItemShow
