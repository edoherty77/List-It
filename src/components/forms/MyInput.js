import React, { useEffect } from 'react'
import { useField, useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'

const MyInput = (props) => {
  const { touched, setFieldTouched, errors, setFieldValue } = useFormikContext()
  const [field] = useField(props)

  //Set the field value to the correct input value when component mounts
  useEffect(() => {
    setFieldValue(props.name, props.data)
  }, [setFieldValue, props.name, props.data])

  return (
    <div className="input-div">
      {/* If props.name is description, a textarea will render. If not, than a regular input */}
      {props.name === 'description' ? (
        <textarea
          className="textarea"
          autoComplete="off"
          {...props}
          {...field}
        />
      ) : (
        <input
          className="input"
          autoComplete="off"
          {...props}
          {...field}
          onBlur={() => {
            setFieldTouched(props.name)
          }}
        />
      )}
      <ErrorMessage error={errors[props.name]} visible={touched[props.name]} />
    </div>
  )
}

export default MyInput
