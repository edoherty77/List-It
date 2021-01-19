import React, { useEffect } from 'react'
import { useField, useFormikContext } from 'formik'

const MyInput = (props) => {
  const { value, setFieldValue } = useFormikContext()
  const [field, meta] = useField(props)

  //Set the field value to the correct input value when component mounts
  useEffect(() => {
    setFieldValue(props.name, props.data)
  }, [setFieldValue, props.name, props.data])

  return (
    <>
      {/* If props.name is description, a textarea will render. If not, than a regular input */}
      {props.name === 'description' ? (
        <textarea
          className="textarea"
          autoComplete="off"
          {...props}
          {...field}
        />
      ) : (
        <input className="input" autoComplete="off" {...props} {...field} />
      )}

      {/* {!!meta.touched && !!meta.error && <div>{meta.error}</div>} */}
    </>
  )
}

export default MyInput
