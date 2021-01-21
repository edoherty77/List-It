// const url = `http://localhost:4000/api/v1`
const url =
  'https://list-it-project.herokuapp.com/api/v1' || `localhost:4000/api/v1/`

class CategoryModel {
  static all = () => {
    // console.log('test: ', process.env.REACT_APP_API_URL)
    return fetch(`${url}`).then((res) => res.json())
  }
}

export default CategoryModel
