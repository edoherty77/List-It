import React, { useEffect } from 'react'
import { useField, useFormikContext } from 'formik'

const MySelect = (props) => {
  const { value, setFieldValue } = useFormikContext()
  const [field, meta] = useField(props)

  //Set the field value to the correct select option value when component mounts
  useEffect(() => {
    setFieldValue(props.name, props.data)
  }, [setFieldValue, props.name, props.data])

  return (
    <>
      <select {...props} {...field} className="input">
        <option value="">Choose A Category</option>
        <option value="Sporting">Sporting</option>
        <option value="Garden">Garden</option>
        <option value="Jewelry">Jewelry</option>
        <option value="Tickets">Tickets</option>
        <option value="Auto">Auto</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Art">Art</option>
      </select>

      {/* {!!meta.touched && !!meta.error && <div>{meta.error}</div>} */}
    </>
  )
}

export default MySelect
