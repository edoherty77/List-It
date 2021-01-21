const url = `http://localhost:4000/api/v1`
// const url =
//   'https://list-it-project.herokuapp.com/api/v1' || `localhost:4000/api/v1/`
const axios = require('axios')

class ItemModel {
  static search = async (data) => {
    const inputValue = data.searchValue
    // console.log('INPUT:', inputValue)
    try {
      const searchItem = await axios.get(`${url}/items/search/${inputValue}`, {
        method: 'GET',
      })
      return searchItem
    } catch (error) {
      console.log(error)
    }
  }

  static show = (id) => {
    return fetch(`${url}/items/${id}`).then((res) => res.json())
  }

  static create = (itemData) => {
    return fetch(`${url}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemData),
    }).then((res) => res.json())
  }

  static update = async (data) => {
    try {
      const updatedItem = await axios.put(`${url}/items/${data.urlId}`, data)
      return updatedItem
    } catch (error) {
      console.log(error)
    }
  }

  static delete = async (item) => {
    try {
      await axios.delete(`${url}/items/${item}`)
    } catch (error) {
      console.log(error)
    }
  }
}

export default ItemModel
