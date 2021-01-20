import React, { useEffect } from 'react'
import { useField, useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'

const MySelect = (props) => {
  const { errors, touched, setFieldTouched, setFieldValue } = useFormikContext()
  const [field] = useField(props)

  //Set the field value to the correct select option value when component mounts
  useEffect(() => {
    setFieldValue(props.name, props.data)
  }, [setFieldValue, props.name, props.data])

  return (
    <div className="input-div">
      <select
        {...props}
        {...field}
        className="input"
        onBlur={() => {
          setFieldTouched(props.name)
        }}
      >
        <option value="">*Choose A Category</option>
        <option value="Sporting">Sporting</option>
        <option value="Garden">Garden</option>
        <option value="Jewelry">Jewelry</option>
        <option value="Tickets">Tickets</option>
        <option value="Auto">Auto</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Art">Art</option>
      </select>
      <ErrorMessage error={errors[props.name]} visible={touched[props.name]} />
    </div>
  )
}

export default MySelect
