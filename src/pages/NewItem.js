import React from 'react'
import ItemModel from '../models/item'
import { Formik } from 'formik'
import Button from '@material-ui/core/Button'

import MyInput from '../components/MyInput'
import MySelect from '../components/MySelect'

const NewItem = (props) => {
  const submit = async (values) => {
    parseInt(values.price)
    values.dateAdded = Date.now()
    await ItemModel.create(values).then((data) =>
      props.history.push(`/items/${data.item._id}`),
    )
  }
  return (
    <div className="list-div">
      <h1 className="header">List an Item</h1>
      <Formik
        onSubmit={(values, e) => {
          submit(values)
        }}
        initialValues={{
          title: '',
          email: '',
          price: '',
          description: '',
          imageUrl: '',
          category: 'Choose A Category',
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-div">
              <MySelect name="category" />
              <MyInput name="title" placeholder="Name" />
              <MyInput name="price" placeholder="Price (in dollars)" />
              <MyInput name="imageUrl" placeholder="Image URL" />
              <MyInput name="email" placeholder="Email" />
              <MyInput name="description" placeholder="Description" />
              <div className="form-btns">
                <Button variant="outlined" color="primary" type="submit">
                  List It
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default NewItem
