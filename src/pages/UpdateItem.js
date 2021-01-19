import React, { useEffect, useState } from 'react'
import ItemModel from '../models/item'
import { Formik } from 'formik'
import Button from '@material-ui/core/Button'
import MyInput from '../components/MyInput'
import MySelect from '../components/MySelect'

const UpdateItem = (props) => {
  //Custom hook to store item data
  const [item, setItem] = useState('')
  //Id from url - use to fetch data
  const urlId = props.match.params.id

  //Submit function to update item
  const updateItem = async (values) => {
    parseInt(values.price)
    const data = { values, urlId, item }
    //Fetch update route and go back to show page
    await ItemModel.update(data).then((itemData) =>
      props.history.push(`/items/${item._id}`),
    )
  }

  //Store item data in custom hook
  const fetchData = () => {
    ItemModel.show(urlId).then((data) => setItem(data.item))
  }

  //Get current item data when component mounts
  useEffect(() => {
    fetchData()
  }, [])

  //Route to go back to show page and exit update form
  const goBack = () => {
    props.history.push(`/items/${item._id}`)
  }

  return (
    <div className="list-div">
      <h1 className="header">Update {item.title}</h1>
      <Formik
        onSubmit={(values) => {
          updateItem(values)
        }}
        initialValues={{
          title: item.title,
          email: item.email,
          price: item.price,
          description: item.description,
          imageUrl: item.imageUrl,
          category: item.category,
        }}
      >
        {({ handleSubmit }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-div">
              <MySelect name="category" data={item.category} />
              <MyInput name="title" data={item.title} />
              <MyInput name="price" data={item.price} />
              <MyInput name="imageUrl" data={item.imageUrl} />
              <MyInput name="email" data={item.email} />
              <MyInput name="description" data={item.description} />
              <div className="form-btns">
                <div className="btn">
                  <Button variant="outlined" color="secondary" onClick={goBack}>
                    Go Back
                  </Button>
                </div>
                <div className="btn">
                  <Button variant="contained" color="primary" type="submit">
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default UpdateItem
