import React from 'react'
import ItemModel from '../models/item'
import Button from '@material-ui/core/Button'

//Form imports
import { Formik } from 'formik'
import MyInput from '../components/forms/MyInput'
import MySelect from '../components/forms/MySelect'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  category: Yup.string().required('Required'),
  title: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  price: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  imageUrl: Yup.string().required('Required'),
})

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
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-div">
              <MySelect name="category" />
              <MyInput name="title" placeholder="*Name" />
              <MyInput name="price" placeholder="*Price" />
              <MyInput name="email" placeholder="*Email" />
              <MyInput name="imageUrl" placeholder="Image URL" />
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
